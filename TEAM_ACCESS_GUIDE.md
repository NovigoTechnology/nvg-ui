# Team Access Guide

## Adding New Team Members

When a new developer joins and needs access to `@novigotechnology/nvg-ui`:

### 1. Grant Repository Access (Admin only)

1. Go to https://github.com/NovigoTechnology/nvg-ui/settings/access
2. Click "Add people" or "Add teams"
3. Search for the user/team
4. Select role:
   - **Read**: Can install the package
   - **Write**: Can install and publish
   - **Admin**: Full access

### 2. Share Setup Instructions

Send the new team member:
- Link to [GITHUB_PACKAGES_SETUP.md](GITHUB_PACKAGES_SETUP.md)
- Repository URL: https://github.com/NovigoTechnology/nvg-ui

### 3. Verify Access

They should:
1. Create a GitHub Personal Access Token with scopes:
   - ✅ `read:packages`
   - ✅ `repo` (for private repos)
2. Configure npm authentication
3. Install the package:
   ```bash
   npm install @novigotechnology/nvg-ui
   ```

---

## Repository Visibility Settings

**Current setting:** Private ✅

To keep the repository private:
1. Go to Settings → General
2. Scroll to "Danger Zone"
3. Ensure "Change repository visibility" shows "Private"

**Do not change to public** unless you want the package accessible to everyone.

---

## Package Access Control

With GitHub Packages on a private repository:

- ✅ **Free** - No cost
- 🔒 **Secure** - Only repository collaborators can access
- 🔑 **Automatic** - Access based on repository permissions
- 📦 **Granular** - Read vs Write access

### Who can install the package?

Anyone with:
- Access to the repository (as collaborator or team member)
- A GitHub token with `read:packages` and `repo` scopes

### Who can publish the package?

Anyone with:
- Write access to the repository
- A GitHub token with `write:packages` and `repo` scopes

**Note:** GitHub Actions can publish automatically using `GITHUB_TOKEN` (no manual configuration needed).

---

## Cost Information

### GitHub Packages Pricing (as of 2026)

For **private repositories**:
- ✅ **Storage**: 500MB free
- ✅ **Data transfer**: 1GB/month free
- ✅ **Additional usage**: Billed to organization

Current package size: ~1.5MB (dist folder)
- Can store ~300 versions within free tier
- Typical usage: Well within free limits

### Recommendations

1. **Keep dist/ lightweight** - Remove unnecessary files
2. **Clean old versions** - Delete very old package versions periodically
3. **Monitor usage** - Check GitHub billing if usage increases

To check current usage:
https://github.com/organizations/NovigoTechnology/settings/billing

---

## Security Best Practices

### For Developers

1. **Protect your token**
   - Never commit tokens to git
   - Use environment variables or `~/.npmrc`
   - Rotate tokens periodically (every 90 days)

2. **Protect proprietary code**
   - This is **closed-source** software - see [LICENSE](LICENSE)
   - Do not share code externally
   - Do not copy to public repositories
   - Handle all code as confidential

3. **Use minimal scopes**
   - Only `read:packages` for most developers
   - Only add `write:packages` if publishing

3. **Revoke unused tokens**
   - https://github.com/settings/tokens
   - Delete tokens you no longer use

### For Admins

1. **Review collaborators** regularly
   - Remove ex-team members promptly
   - Audit access quarterly

2. **Use teams** instead of individual access
   - Easier to manage
   - Better for scaling

3. **Enable 2FA** for all team members
   - Organization setting
   - Required for better security

---

## Migration Notes

### From git+ssh installation

If your team was using:
```bash
npm install git+ssh://git@github.com/NovigoTechnology/nvg-ui.git
```

**Update to:**
```bash
npm install @novigotechnology/nvg-ui
```

**After configuring `.npmrc` authentication.**

### Update existing projects

1. Remove old dependency:
   ```bash
   npm uninstall nvg-ui
   ```

2. Configure GitHub Packages authentication

3. Install with new name:
   ```bash
   npm install @novigotechnology/nvg-ui
   ```

4. Update imports:
   ```javascript
   // Before
   import { AutoComplete } from 'nvg-ui';
   
   // After
   import { AutoComplete } from '@novigotechnology/nvg-ui';
   ```

---

## Troubleshooting Team Issues

### "New developer can't install package"

**Check:**
1. Do they have repository access? → Add as collaborator
2. Did they create a GitHub token? → With `repo` scope
3. Did they configure `.npmrc`? → Share setup guide
4. Is the token valid? → Check expiration

### "CI/CD failing to install package"

**For GitHub Actions:** Should work automatically

**For other CI:**
1. Add `GITHUB_TOKEN` secret with `read:packages` scope
2. Configure `.npmrc` in CI:
   ```bash
   echo "@novigotechnology:registry=https://npm.pkg.github.com" >> .npmrc
   echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc
   ```

### "Someone published wrong version"

**Rollback:**
1. Delete the package version:
   - Go to package page
   - Click on version → Delete
2. Publish correct version:
   ```bash
   npm version [correct-version]
   git push --tags
   ```

---

## Support

For issues:
1. Check [GITHUB_PACKAGES_SETUP.md](GITHUB_PACKAGES_SETUP.md)
2. Review this guide
3. Open an issue: https://github.com/NovigoTechnology/nvg-ui/issues
4. Contact repository admin
