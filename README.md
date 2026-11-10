# nvg-ui

[![CI](https://github.com/NovigoTechnology/nvg-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/NovigoTechnology/nvg-ui/actions/workflows/ci.yml)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

Reusable Vue components for Novigo applications. The package is distributed privately as
`@novigotechnology/nvg-ui` through GitHub Packages (`https://npm.pkg.github.com`).

## Installation

### Local development

Create a [classic personal access token](https://github.com/settings/tokens) with the
`read:packages` scope. The GitHub user that owns the token must also have read access to the
package. Authorize the token for the NovigoTechnology organization if SSO is enabled.

Keep the token outside the repository. For example, add this to `~/.npmrc`:

```ini
@novigotechnology:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
always-auth=true
```

Then export the token only in your local shell:

```bash
export NODE_AUTH_TOKEN=YOUR_CLASSIC_PAT
```

To preserve existing imports such as `import ... from 'nvg-ui'`, consumers using Yarn Classic
must install the scoped package through an npm alias. Replace `<VERSION>` with a published
version:

```json
{
  "dependencies": {
    "nvg-ui": "npm:@novigotechnology/nvg-ui@^<VERSION>"
  }
}
```

Run `yarn install` and commit the resulting `yarn.lock`. New applications may instead depend on
`@novigotechnology/nvg-ui` directly and use the scoped name in their imports.

Do not commit a PAT, a generated `.npmrc` containing a token, or a resolved token value.

### GitHub Actions consumers

Each consumer repository must have read access under the package's **Manage Actions access**
settings. Its workflow can then use its own `GITHUB_TOKEN`:

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

See [GITHUB_PACKAGES_SETUP.md](GITHUB_PACKAGES_SETUP.md) for the package administration and
consumer migration checklist.

## Usage

```javascript
import { AutoComplete, GridTable } from 'nvg-ui';
```

## Development

Requirements: Node.js 24+, Yarn Classic 1.22.x.

```bash
yarn install
yarn hooks:install
yarn test
yarn lint
yarn build
yarn package:check
```

`yarn hooks:install` enables the repository's Git hooks explicitly for contributors. It is not an
install lifecycle script. `yarn build` produces the two JavaScript bundles and copies the public
type declarations into `dist/`. `yarn package:check` verifies the exact tarball contents and
rejects install lifecycle scripts. Husky and the build are therefore never run when a consumer
installs the published package.

## Releases

The `Auto Release` workflow runs semantic-release on `main`. It builds and validates the package,
publishes it to GitHub Packages with restricted access using the workflow's `GITHUB_TOKEN`, and
creates the GitHub release. No publishing PAT is stored in the repository.

The package is linked to this repository through the `repository` field in `package.json`.

## License

Closed-source Code License (CSCL). Copyright (C) NovigoTechnology — All Rights Reserved. See
[LICENSE](LICENSE).
