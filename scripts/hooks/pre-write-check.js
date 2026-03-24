#!/usr/bin/env node

/**
 * Pre-Write Check Hook
 * Fires BEFORE CC writes or edits a file.
 * Catches common quality violations before they hit the codebase.
 */

const input = process.argv[2] || '';

// Only check TypeScript/React files
if (!input.match(/\.(tsx?|jsx?)$/i) && !input.includes('src/')) {
  process.exit(0);
}

const violations = [];

// Check for hardcoded hex colours (not in globals.css or design tokens)
if (!input.includes('globals.css') && !input.includes('design-tokens') && !input.includes('tailwind.config')) {
  const hexPattern = /#[0-9a-fA-F]{3,8}\b/g;
  const hexMatches = input.match(hexPattern);
  if (hexMatches) {
    const allowedHex = ['#fff', '#FFF', '#ffffff', '#FFFFFF', '#000', '#000000', '#0000'];
    const brandHex = hexMatches.filter(h => !allowedHex.includes(h));
    if (brandHex.length > 0) {
      violations.push(`Hardcoded hex colour(s) found: ${brandHex.join(', ')}. Use CSS variables from globals.css instead.`);
    }
  }
}

// Check for `any` type
if (/:\s*any\b/.test(input) || /as\s+any\b/.test(input)) {
  violations.push('TypeScript `any` type detected. Use a specific type or `unknown`.');
}

// Check for console.log
if (/console\.log\(/.test(input)) {
  violations.push('console.log detected. Remove before committing.');
}

// Check for inline styles
if (/style\s*=\s*\{\{/.test(input)) {
  violations.push('Inline style detected. Use Tailwind classes or CSS variables.');
}

// Check for localStorage/sessionStorage
if (/localStorage|sessionStorage/.test(input)) {
  violations.push('localStorage/sessionStorage detected. Use httpOnly cookies via @supabase/ssr.');
}

// Check for direct font-family strings (should use CSS variables)
if (/font-family\s*:/.test(input) && !input.includes('globals.css') && !input.includes('tailwind.config')) {
  violations.push('Direct font-family detected. Use var(--font-display) or var(--font-body) from globals.css.');
}

// Check for modifying shadcn/ui primitives directly
if (input.includes('components/ui/') && !input.includes('.gitkeep')) {
  violations.push('Editing shadcn/ui primitive directly. Customise via className prop instead, or create a wrapper component.');
}

if (violations.length > 0) {
  console.log(`[PRE-WRITE] ⚠️ Quality violations detected:`);
  violations.forEach(v => console.log(`  - ${v}`));
  console.log(`[PRE-WRITE] Fix these before writing the file.`);
}

process.exit(0);
