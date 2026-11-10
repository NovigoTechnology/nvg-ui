# nvg-ui

[![CI](https://github.com/NovigoTechnology/nvg-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/NovigoTechnology/nvg-ui/actions/workflows/ci.yml)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

Reusable Vue components for Novigo applications. Releases are consumed directly from this public
Git repository with prebuilt production artifacts.

## Installation

Yarn Classic consumers can preserve existing imports from `nvg-ui` and use semantic Git tags:

```json
{
  "dependencies": {
    "nvg-ui": "git+https://github.com/NovigoTechnology/nvg-ui.git#semver:^1.27.6"
  }
}
```

Then regenerate and commit the lockfile:

```bash
yarn install
```

No PAT, npm registry configuration, `NODE_AUTH_TOKEN`, or GitHub Packages permission is required.
Every release tag contains `dist/` and declarations, so installing the dependency does not run a
build or Husky.

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

`yarn hooks:install` explicitly enables Git hooks for contributors. It is intentionally not an
install lifecycle script.

## Releases

The `Auto Release` workflow runs semantic-release on `main` and performs the release atomically:

1. Install, lint, test through CI, and build the library.
2. Validate the package contents and forbid consumer lifecycle scripts.
3. Set the next semantic version in `package.json`.
4. Commit `package.json` and the generated `dist/` with `[skip ci]`.
5. Tag that release commit and create the GitHub release.
6. Verify that the tag contains both bundles, declarations, and a matching manifest version.

The workflow uses the repository's ephemeral `GITHUB_TOKEN`; no publishing PAT is stored. See
[GIT_DISTRIBUTION.md](GIT_DISTRIBUTION.md) for the invariants and consumer migration procedure.

## License

Closed-source Code License (CSCL). Copyright (C) NovigoTechnology — All Rights Reserved. See
[LICENSE](LICENSE).
