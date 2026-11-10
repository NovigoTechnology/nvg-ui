# GitHub Packages setup

This checklist covers publication of the private package `@novigotechnology/nvg-ui` and migration
of its Yarn Classic consumers.

## Before the first publication

An organization/repository administrator must verify all of the following:

1. The package name is `@novigotechnology/nvg-ui` and its registry is
   `https://npm.pkg.github.com`.
2. The package page is linked to `NovigoTechnology/nvg-ui`. The `repository` field in
   `package.json` establishes this link on publication.
3. Package visibility is **Private** (restricted), not public or internal.
4. Under package settings → **Manage Actions access**, add these repositories with **Read** access:
   - `NovigoTechnology/nvg_base` (also covers `nvg_base/ui2`)
   - `NovigoTechnology/nagus`
   - `NovigoTechnology/arandu_gestion`
   - `NovigoTechnology/csf_argentina`
   - every other repository that installs the package

Package visibility and cross-repository package access are GitHub administrative settings; they
cannot be enforced by files in this repository. Repository visibility is independent from package
visibility.

## Publication

`.github/workflows/auto-release.yml` publishes automatically after semantic-release determines a
new version on `main`. The workflow has `packages: write`, builds `dist/`, validates the tarball,
and authenticates with its ephemeral `GITHUB_TOKEN`.

`package.json` intentionally uses `"private": false`, because npm refuses to publish manifests
marked `private`. Package visibility is enforced separately by `publishConfig.access: restricted`
and the GitHub Packages setting.

The published tarball contains only production artifacts plus npm's standard metadata:

- `dist/nvg-ui.es.js`
- `dist/nvg-ui.umd.js`
- `dist/index.d.ts`
- `package.json`, `README.md`, and `LICENSE`

It contains no source files, Husky hooks, or development tooling. Its manifest defines no install
lifecycle script.

## Local installation

Use a classic PAT with only `read:packages` (plus access to the private package). Never store the
token in this repository. Configure `~/.npmrc`:

```ini
@novigotechnology:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
always-auth=true
```

Export it in the current shell and install:

```bash
export NODE_AUTH_TOKEN=YOUR_CLASSIC_PAT
yarn install --frozen-lockfile
```

If the organization enforces SSO, authorize the classic PAT for NovigoTechnology.

## Consumer migration

Use an npm alias so existing `nvg-ui` imports do not change:

```json
{
  "dependencies": {
    "nvg-ui": "npm:@novigotechnology/nvg-ui@^<VERSION>"
  }
}
```

Remove the previous Git URL, run `yarn install`, and commit `package.json` plus `yarn.lock`. Apply
this at least in `nagus`, `nvg_base`, and `nvg_base/ui2`.

Every consumer workflow that installs dependencies needs:

```yaml
permissions:
  contents: read
  packages: read

steps:
  - uses: actions/setup-node@v6
    with:
      node-version: '24'
      registry-url: 'https://npm.pkg.github.com'
      scope: '@novigotechnology'
      cache: 'yarn'
  - run: yarn install --frozen-lockfile
    env:
      NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Do not add a PAT secret to consumer workflows. Their ephemeral `GITHUB_TOKEN` works after the
consumer repository is granted **Manage Actions access** on the package.

## Verification

For each consumer, verify on a clean runner that:

1. `yarn install --frozen-lockfile` succeeds repeatedly.
2. `yarn.lock` resolves `@novigotechnology/nvg-ui` from `npm.pkg.github.com`, not a Git URL.
3. The install log does not run nvg-ui's build, Husky, or other development scripts.
4. Existing imports from `nvg-ui` compile unchanged.
5. POT workflows finish successfully in `nagus`, `arandu_gestion`, and `csf_argentina`.
