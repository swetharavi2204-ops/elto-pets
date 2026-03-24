#!/usr/bin/env node

/**
 * Post-Write Verify Hook
 * Fires AFTER CC writes or edits a file.
 * Runs a quick type-check to catch errors immediately.
 */

const { execSync } = require('child_process');
const path = require('path');

const filePath = process.argv[2] || '';

// Only check TypeScript files
if (!filePath.match(/\.tsx?$/)) {
  process.exit(0);
}

try {
  execSync('npx tsc --noEmit --pretty 2>&1 | head -20', {
    encoding: 'utf8',
    timeout: 15000,
    cwd: process.cwd(),
  });
} catch (err) {
  if (err.stdout) {
    const errorLines = err.stdout.split('\n').slice(0, 10).join('\n');
    console.log(`[POST-WRITE] TypeScript errors after editing ${path.basename(filePath)}:`);
    console.log(errorLines);
    console.log(`[POST-WRITE] Fix before continuing.`);
  }
}

process.exit(0);
