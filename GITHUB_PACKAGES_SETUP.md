# Quick Setup Guide - GitHub Packages (Private Repository)

> **Important:** This repository is **private**. Only team members with access to the repository can install and use this package.

## Benefits of GitHub Packages for Private Repos

- ✅ **100% Free** - No cost for private repositories
- 🔒 **Secure** - Only repository collaborators have access
- 🔑 **Single Authentication** - Use GitHub credentials (no separate npm account)
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
3. Give it a descriptive name (e.g., "npm packages - nvg-ui")
4. Select scopes:
   - ✅ `read:packages` (required to install)
   - ✅ `write:packages` (only if you need to publish)
   - ✅ `repo` (may be needed for private repos)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)

### 2. Configure npm authentication

**Option A: Global configuration (recommended for development)**

```bash
# Add to ~/.npmrc
echo "@novigotechnology:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE" >> ~/.npmrc
```

**Option B: Project-specific configuration**

Create `.npmrc` in your project:
```ini
@novigotechnology:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then export the token:
```bash
export GITHUB_TOKEN=your_token_here
```

**Option C: Using GitHub CLI (easiest)**

```bash
# Login with GitHub CLI
gh auth login

# Configure npm
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
# Test authentication
npm ping --registry=https://npm.pkg.github.com

# Test package access
npm view @novigotechnology/nvg-ui
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
