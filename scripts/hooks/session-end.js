#!/usr/bin/env node

/**
 * Session End Hook
 * Fires automatically when CC session ends.
 * Creates/updates SESSION-STATE.md from git state as a safety net.
 * Note: Claude Mem also captures session context automatically.
 * This hook ensures we always have a readable backup.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const stateFile = path.join(process.cwd(), 'SESSION-STATE.md');

function run(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8', timeout: 5000 }).trim();
  } catch {
    return '';
  }
}

try {
  // Only write if SESSION-STATE.md is stale (older than 5 minutes) or doesn't exist
  if (fs.existsSync(stateFile)) {
    const stats = fs.statSync(stateFile);
    const ageMinutes = (Date.now() - stats.mtimeMs) / 60000;
    if (ageMinutes < 5) {
      console.log('[SESSION-END] SESSION-STATE.md is fresh — skipping auto-save.');
      process.exit(0);
    }
  }

  const branch = run('git branch --show-current');
  const lastCommit = run('git log -1 --format="%h %s" 2>/dev/null');
  const modifiedFiles = run('git diff --name-only 2>/dev/null');
  const stagedFiles = run('git diff --cached --name-only 2>/dev/null');

  let projectName = 'unknown';
  const projectMd = path.join(process.cwd(), 'PROJECT.md');
  if (fs.existsSync(projectMd)) {
    const content = fs.readFileSync(projectMd, 'utf8');
    const nameMatch = content.match(/## Project Name\s*\n\s*(.+)/);
    if (nameMatch) projectName = nameMatch[1].trim().replace(/^\[/, '').replace(/\]$/, '');
  }

  const now = new Date().toISOString();
  const uncommitted = modifiedFiles || stagedFiles
    ? `\n- Uncommitted changes: ${(modifiedFiles + ' ' + stagedFiles).trim()}`
    : '';

  const state = `# SESSION-STATE.md — auto-saved by hook
# CC's manual SESSION-STATE.md is preferred. Claude Mem also has context.

project: ${projectName}
phase: check manifests
branch: ${branch || 'unknown'}
last_updated: ${now}

## Last completed
- Last commit: ${lastCommit || 'no commits yet'}${uncommitted}

## Next task
- Resume from current phase — check manifests and phase file for specifics

## Context needed for next session
- CLAUDE.md (always)
- Current phase file
- Latest manifest

## Known issues
- Auto-saved by session-end hook — CC should verify and enrich this state
`;

  fs.writeFileSync(stateFile, state);
  console.log(`[SESSION-END] Safety net SESSION-STATE.md saved at ${now}`);

} catch (err) {
  console.log('[SESSION-END] Could not auto-save state — non-critical.');
}
