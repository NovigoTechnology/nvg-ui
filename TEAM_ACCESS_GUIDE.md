# Team access guide

Access to `@novigotechnology/nvg-ui` is managed separately for people and GitHub Actions.

## Developers

Grant the developer read access to the private package, directly or through an organization team.
For local installation they need a classic PAT with `read:packages`; the token must be authorized
for NovigoTechnology when organization SSO is enabled.

Send them the local setup section in [README.md](README.md#local-development). Tokens belong in the
developer's environment or user-level `~/.npmrc`, never in a repository.

## Consumer repositories

On the package page, open **Package settings → Manage Actions access** and grant **Read** to each
consumer. At minimum this includes `nvg_base`, `nagus`, `arandu_gestion`, and `csf_argentina`.
Consumer workflows use their own ephemeral `GITHUB_TOKEN` with `packages: read`; they do not need a
shared PAT.

## Publishers

Publication is performed only by `.github/workflows/auto-release.yml`. Its `GITHUB_TOKEN` has
`packages: write` for the duration of the job. Maintainers should not publish manually with a
long-lived credential.

See [GITHUB_PACKAGES_SETUP.md](GITHUB_PACKAGES_SETUP.md) for the complete administration,
migration, and verification checklist.
