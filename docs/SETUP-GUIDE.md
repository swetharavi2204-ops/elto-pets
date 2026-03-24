# Setup Guide — First Time

## Prerequisites

- Claude Max 5x subscription ($100/month)
- Claude Code installed: `npm install -g @anthropic-ai/claude-code`
- Node.js 18+
- Python 3 (for UI/UX Pro Max search scripts)
- Git

## Step 1: Install Plugins (one-time, inside Claude Code)

Open Claude Code and run these commands:

```
# Add marketplaces
/plugin marketplace add anthropics/claude-code
/plugin marketplace add obra/superpowers-marketplace
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill

# Install plugins (user scope — follows you to all projects)
/plugin install frontend-design@claude-code
/plugin install superpowers@superpowers-marketplace
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill

# Memory plugin (choose one):
# Option A: Claude Mem
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem

# Option B: memsearch (lighter, stores as markdown files)
/plugin marketplace add zilliztech/memsearch
/plugin install memsearch

# Verify all installed
/plugin
# → Check "Installed" tab

# Restart Claude Code to activate everything
/exit
```

## Step 2: Create Your Project from Template

1. On GitHub, click **"Use this template"** → create new repo
2. Clone: `git clone [your-repo-url] && cd [your-repo]`
3. Copy template to root: `cp -r template/* . && cp -r template/.claude .`

## Step 3: Set Up the Alias

Add to your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
alias cc="claude --model opusplan"
```

Reload: `source ~/.zshrc`

## Step 4: Fill In PROJECT.md

**Option A: Let Claude generate it (recommended)**
```bash
cc
```
Tell Claude:
```
I'm building [describe your project — what it does, who it's for, the vibe].
Generate a complete design system and fill in PROJECT.md.
```

Claude auto-activates UI/UX Pro Max + Frontend Design and fills PROJECT.md.

**Option B: Fill it manually**

## Step 5: Start Building

```bash
cc
```
Tell CC: **"Start Phase 01"**

## Troubleshooting

**Plugin not activating:** `/plugin` → check "Installed" tab. `/reload-plugins` to refresh.

**Claude Mem install fails:** Try memsearch instead: `/plugin marketplace add zilliztech/memsearch` then `/plugin install memsearch`

**CC doesn't read CLAUDE.md:** Make sure it's in project root, not inside template/.

**Hooks don't fire:** Check `.claude/hooks.json` exists in project root.

**UI/UX Pro Max search.py fails:** Verify Python 3: `python3 --version`

**opusplan not recognised:** `npm update -g @anthropic-ai/claude-code`

**Permission errors on hooks:** `chmod +x scripts/hooks/*.js`
