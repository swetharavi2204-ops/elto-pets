#!/usr/bin/env node

/**
 * Session Start Hook
 * Fires automatically when CC starts a new session.
 * Reads SESSION-STATE.md and prints a summary.
 * Note: If Claude Mem is installed, it also injects context automatically.
 * This hook serves as a visible confirmation + backup.
 */

const fs = require('fs');
const path = require('path');

const stateFile = path.join(process.cwd(), 'SESSION-STATE.md');

try {
  if (fs.existsSync(stateFile)) {
    const content = fs.readFileSync(stateFile, 'utf8');

    const project = content.match(/project:\s*(.+)/)?.[1] || 'unknown';
    const phase = content.match(/phase:\s*(.+)/)?.[1] || 'unknown';
    const branch = content.match(/branch:\s*(.+)/)?.[1] || 'unknown';
    const lastUpdated = content.match(/last_updated:\s*(.+)/)?.[1] || 'unknown';

    const nextTaskMatch = content.match(/## Next task\n([\s\S]*?)(?=\n## |$)/);
    const nextTask = nextTaskMatch
      ? nextTaskMatch[1].trim().split('\n').slice(0, 3).join(' | ')
      : 'not specified';

    const issuesMatch = content.match(/## Known issues\n([\s\S]*?)(?=\n## |$)/);
    const issues = issuesMatch ? issuesMatch[1].trim() : 'none';

    console.log(`[SESSION-STATE] Loaded from ${lastUpdated}`);
    console.log(`[SESSION-STATE] Project: ${project} | Phase: ${phase} | Branch: ${branch}`);
    console.log(`[SESSION-STATE] Next: ${nextTask}`);

    if (issues && issues !== 'none' && issues !== '- None currently') {
      console.log(`[SESSION-STATE] ⚠️ Known issues: ${issues}`);
    }

    console.log(`[SESSION-STATE] Note: Claude Mem also injects context if installed.`);
  } else {
    console.log('[SESSION-STATE] No SESSION-STATE.md found — cold start.');
    console.log('[SESSION-STATE] Claude Mem may still inject past session context.');
    console.log('[SESSION-STATE] If no context available, CC should read all manifests.');
  }
} catch (err) {
  console.log('[SESSION-STATE] Could not read state file — proceeding with cold start.');
}
