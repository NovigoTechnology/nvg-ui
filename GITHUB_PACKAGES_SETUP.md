# Quick Setup Guide - GitHub Packages (Private Repository)

> **Important:** This repository is **private**. Only team members with access to the repository can install and use this package.

## Benefits of GitHub Packages for Private Repos

- ✅ **100% Free** - No cost for private repositories
- 🔒 **Secure** - Only repository collaborators have access
- 🔑 **Single Authentication** - Use GitHub credentials (no separate registry account)
- 🚀 **Fast** - Integrated with GitHub infrastructure
- 🤖 **CI/CD Ready** - Automatic authentication in GitHub Actions

---

## For Developers (Installing the package)

**Prerequisites:**
- Access to the private repository `NovigoTechnology/nvg-ui`
- GitHub account with repository permissions

### 1. Create GitHub Personal Access Token

> **Note:** Your token must have the same access permissions as your GitHub account for this private repository.

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a descriptive name (e.g., "GitHub Packages - nvg-ui")
4. Select scopes:
   - ✅ `read:packages` (required to install)
   - ✅ `write:packages` (only if you need to publish)
   - ✅ `repo` (may be needed for private repos)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)

### 2. Configure yarn authentication

**Option A: Project-specific with .npmrc (recommended for teams) ⭐**

Create `.npmrc` in your project root and commit it to git:
```ini
@novigotechnology:registry=https://npm.pkg.github.com
```

Create `.npmrc.local` (DON'T commit this file - add to `.gitignore`):
```ini
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
```

Add to `.gitignore`:
```
.npmrc.local
```

Then configure yarn to use both files:
```bash
# This merges both .npmrc files when installing
yarn config set --home enableGlobalCache false
```

Each developer creates their own `.npmrc.local` with their personal token. The registry configuration is shared via git.

**Option B: Global configuration (for personal development)**

```bash
# Add to ~/.npmrc
echo "@novigotechnology:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE" >> ~/.npmrc
```

**Option C: Project .npmrc with environment variable**

Create `.npmrc` in your project:
```ini
@novigotechnology:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then export the token:
```bash
export GITHUB_TOKEN=your_token_here
```

You can commit this `.npmrc` to git safely (no secrets).

**Option D: Using GitHub CLI (easiest for quick setup)**

```bash
# Login with GitHub CLI
gh auth login

# Configure yarn
echo "@novigotechnology:registry=https://npm.pkg.github.com" >> ~/.npmrc
gh auth token | xargs -I {} echo "//npm.pkg.github.com/:_authToken={}" >> ~/.npmrc
```

### 3. Install the package

```bash
yarn add @novigotechnology/nvg-ui
```

---

## For Maintainers (Publishing the package)

### Publishing a new version

The workflow publishes automatically to GitHub Packages when you push a tag:

```bash
# Build, version, and push
yarn release

# Or manually
yarn build
yarn version:patch  # or minor, or major
git push && git push --tags
```

### Manual publish (if needed)

```bash
yarn build
yarn publish
```

**Note:** 
- GitHub Actions DOES NOT need a secret token - it uses `GITHUB_TOKEN` automatically
- `GITHUB_TOKEN` has `packages: write` permission in the workflow
- No manual secret configuration needed! ✅

---

## For CI/CD

### GitHub Actions (automatic)

The release workflow already includes:
```yaml
permissions:
  packages: write  # Allows publishing to GitHub Packages
```

No additional configuration needed!

### Other CI Systems

Add these environment variables:
```bash
GITHUB_TOKEN=your_token_with_packages_write
```

Then in your CI:
```bash
echo "@novigotechnology:registry=https://npm.pkg.github.com" >> .npmrc
echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc
yarn add @novigotechnology/nvg-ui
```

---

## Troubleshooting

### "401 Unauthorized"
- Check your token is valid and has `read:packages` scope
- Verify the token hasn't expired
- Try regenerating the token

### "404 Not Found" or "403 Forbidden"
- **Most common issue:** You don't have access to the private repository
- Ask repository admin to add you as a collaborator
- Verify repository name: `NovigoTechnology/nvg-ui`
- Package must be published at least once
- Package name must match exactly: `@novigotechnology/nvg-ui`
- Your GitHub token must have `repo` scope for private repositories

### "Unable to authenticate"
```bash
# Clear yarn cache
yarn cache clean

# Remove old config
rm ~/.npmrc

# Reconfigure
echo "@novigotechnology:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_TOKEN" >> ~/.npmrc
```

### Testing your configuration

```bash
# Test package access
yarn info @novigotechnology/nvg-ui

# Or check if you can resolve it
yarn why @novigotechnology/nvg-ui
```

---

## Alternative: Install from Git

If you don't want to use GitHub Packages:

```bash
yarn add git+ssh://git@github.com/NovigoTechnology/nvg-ui.git
yarn add git+ssh://git@github.com/NovigoTechnology/nvg-ui.git#v1.0.51
```

This requires:
- SSH key configured with GitHub
- Access to the repository
- No registry configuration needed
