# Git distribution

`nvg-ui` is distributed as a public Git dependency for Yarn Classic consumers. Release tags include
prebuilt artifacts so production installations require no package-registry credentials and no
consumer-side build.

## Release invariants

Every `vX.Y.Z` tag must contain:

- `package.json` with version `X.Y.Z`;
- `dist/nvg-ui.es.js`;
- `dist/nvg-ui.umd.js`;
- `dist/index.d.ts`;
- no `preinstall`, `install`, `postinstall`, `prepare`, or `prepack` script.

Semantic-release generates and commits these files locally before creating the tag. `dist/` remains
ignored for ordinary development output but is force-added to the release commit. The tag points to
that commit, whose parent is the validated `main` commit. Only the tag is pushed, so the protected
branch continues to require pull requests and the release needs no bypass token.

## Consumer dependency

Keep the dependency key as `nvg-ui` so current imports continue working:

```json
{
  "dependencies": {
    "nvg-ui": "git+https://github.com/NovigoTechnology/nvg-ui.git#semver:^1.27.6"
  }
}
```

Yarn records the exact release commit in `yarn.lock`. Commit both manifest and lockfile changes.

Apply this in:

- `nvg_base/package.json`;
- `nvg_base/ui2/package.json`;
- `nagus/package.json`.

Repositories that consume these apps transitively, including `arandu_gestion` and
`csf_argentina`, need no npm authentication configuration.

## Production behavior

`bench get-app`, `bench update`, and application builds clone the public tagged dependency. They do
not require a PAT, `.npmrc`, `NODE_AUTH_TOKEN`, or Manage Actions access for `nvg-ui`.

The tagged package already contains its entry points. Yarn must not start a nested dependency
installation to prepare `nvg-ui`; regular transitive dependencies are resolved by the consumer's
top-level install.

## Verification

For each release and consumer:

1. Run `yarn install --frozen-lockfile` repeatedly with a clean cache.
2. Confirm the lock resolves `nvg-ui` to the intended Git tag commit.
3. Confirm installation logs do not run Vite, Husky, or a nested nvg-ui build.
4. Compile existing imports from `nvg-ui` without changes.
5. Run the POT workflows for `nagus`, `arandu_gestion`, and `csf_argentina` repeatedly on clean
   runners.
