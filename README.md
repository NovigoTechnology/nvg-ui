# nvg-ui

[![CI](https://github.com/NovigoTechnology/nvg-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/NovigoTechnology/nvg-ui/actions/workflows/ci.yml)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

Reusable Vue.js components for Novigo applications.

> **Note:** This is a **private repository**. Only team members with repository access can install this package.

## 📦 Installation

This package is published to **GitHub Packages** (private registry).  
✅ **Free** for private repositories  
🔒 **Access** limited to repository collaborators

### 1. Configure GitHub Packages authentication

Create or edit `~/.npmrc` in your home directory:

```bash
# Option A: Using Personal Access Token (classic)
# Create token at: https://github.com/settings/tokens
# Required scopes: read:packages
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc
echo "@novigotechnology:registry=https://npm.pkg.github.com" >> ~/.npmrc

# Option B: Using GitHub CLI (recommended)
gh auth token | xargs -I {} echo "//npm.pkg.github.com/:_authToken={}" >> ~/.npmrc
echo "@novigotechnology:registry=https://npm.pkg.github.com" >> ~/.npmrc
```

Or create a project-specific `.npmrc` in your project root:

```ini
@novigotechnology:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then set the environment variable:
```bash
export GITHUB_TOKEN=your_personal_access_token
```

### 2. Install the package

```bash
# Latest version
yarn add @novigotechnology/nvg-ui

# Specific version
yarn add @novigotechnology/nvg-ui@1.0.51
```

### Alternative: Install from Git (without registry)

If you prefer to install directly from GitHub:

```bash
yarn add git+ssh://git@github.com/NovigoTechnology/nvg-ui.git
yarn add git+ssh://git@github.com/NovigoTechnology/nvg-ui.git#v1.0.51
```

## 🚀 Usage

```javascript
import { AutoComplete, GridTable, LinkField } from '@novigotechnology/nvg-ui';

// In your Vue component
export default {
  components: {
    AutoComplete,
    GridTable,
    LinkField
  }
}
```

## 🛠️ Development

### Prerequisites
- Node.js 24+
- yarn

### Install dependencies

```bash
yarn install
```

### Available scripts

```bash
# Development
yarn dev              # Start development server

# Build
yarn build            # Build library for production

# Linting and formatting
yarn lint             # Run ESLint
yarn lint:fix         # Fix ESLint errors automatically
yarn format           # Format code with Prettier
yarn format:check     # Check format without modifying

# Versioning and release
yarn version:patch    # Increment patch version (1.0.0 -> 1.0.1)
yarn version:minor    # Increment minor version (1.0.0 -> 1.1.0)
yarn version:major    # Increment major version (1.0.0 -> 2.0.0)
yarn release          # Build + version patch + push + tags
```

**Note:** The `dist/` folder is not versioned. CI/CD builds it automatically during the release process.

## 🔄 CI/CD

### GitHub Actions Workflows

#### CI (Continuous Integration)
Runs automatically on push and pull requests:
- ✅ **Conventional Commits validation** (PRs only)
  - Validates all commit messages in the PR
  - Validates PR title follows Conventional Commits format
- ✅ Linting with ESLint
- ✅ Format check with Prettier
- ✅ Library build
- ✅ Upload artifacts

**Branches:** `main`, `master`, `develop`, `feat/**`, `fix/**`

**Actions versions:** Latest (checkout v6, setup-node v6, upload-artifact v7)
**Node.js version:** 24 LTS

#### Release & Publish
Automatically publishes to GitHub Packages when a tag is pushed:
- ✅ Validate code (lint + build)
- ✅ Publish to GitHub Packages
- ✅ Create GitHub Release with artifacts
- ✅ Generate release notes automatically

**Trigger:** Tags with format `v*.*.*` (e.g., `v1.0.52`)

```bash
# To publish a new version:
yarn release
```

**Note:** The workflow uses `GITHUB_TOKEN` automatically (no manual secret configuration needed).

#### CodeQL Security Analysis
Automated code security scanning:
- 🔍 Scans for security vulnerabilities
- 🔒 Identifies common coding errors
- 📊 Security and quality queries
- ⏰ Runs weekly (Mondays) + on every push/PR

**Language:** JavaScript/TypeScript

#### Dependabot
Automatic dependency updates:
- 📦 npm dependencies (weekly)
- 🔧 GitHub Actions (weekly)
- ✅ Auto-merge patch and minor updates
- ⚠️ Major updates require manual review

## 🎯 Pre-commit Hooks

This project uses **Husky** and **lint-staged** to validate code before each commit:

- ✅ ESLint - Fixes errors automatically
- ✅ Prettier - Formats code
- ⚠️ Commit is blocked if there are unfixable errors

### Skip hooks (not recommended)
```bash
git commit --no-verify -m "message"
```

## 📋 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

### Commit conventions

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Formatting, missing semicolons, etc
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Add or fix tests
- `chore:` Build changes, dependencies, etc

## 📄 License

**Closed-source Code License (CSCL)** - Proprietary

Copyright (C) NovigoTechnology - All Rights Reserved.

This is proprietary software. Unauthorized copying, transferring, or reproduction of the contents of this project, via any medium, is strictly prohibited.

See [LICENSE](LICENSE) for full details.

## 🔗 Links

- [GitHub Repository](https://github.com/NovigoTechnology/nvg-ui)
- [GitHub Packages](https://github.com/NovigoTechnology/nvg-ui/packages)
- [Issues](https://github.com/NovigoTechnology/nvg-ui/issues)
- [Releases](https://github.com/NovigoTechnology/nvg-ui/releases)

---

## 📝 Additional Documentation

### GitHub Packages vs npm Registry

This package uses **GitHub Packages** instead of the public npm registry because:
- ✅ Free for private repositories
- ✅ Integrated with GitHub authentication
- ✅ No separate npm account needed
- ✅ Better access control with GitHub teams
- ✅ Automatic authentication in GitHub Actions

### Troubleshooting

**Error: Unable to authenticate**
- Verify your Personal Access Token has `read:packages` scope
- Check your `.npmrc` configuration
- Try: `npm logout && npm login --registry=https://npm.pkg.github.com`

**Error: 404 Not Found**
- Package name must match: `@novigotechnology/nvg-ui`
- Verify you have access to the GitHub repository
- Ensure the package has been published at least once

**CI/CD Issues**
- GitHub Actions automatically has `packages: write` permission
- Verify the workflow has `permissions: packages: write` in the YAML file
- [Issues](https://github.com/NovigoTechnology/nvg-ui/issues)
- [Releases](https://github.com/NovigoTechnology/nvg-ui/releases)
