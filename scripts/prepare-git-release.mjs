import { execFile } from 'node:child_process';
import { access, readFile } from 'node:fs/promises';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const releaseFiles = ['package.json', 'dist/index.d.ts', 'dist/nvg-ui.es.js', 'dist/nvg-ui.umd.js'];

async function git(args, { cwd, env }) {
  const { stdout } = await execFileAsync('git', args, { cwd, env });
  return stdout.trim();
}

export async function prepare(_pluginConfig, context) {
  const { cwd, env, logger, nextRelease } = context;

  await Promise.all(releaseFiles.map(file => access(`${cwd}/${file}`)));

  const manifest = JSON.parse(await readFile(`${cwd}/package.json`, 'utf8'));
  if (manifest.version !== nextRelease.version) {
    throw new Error(
      `Expected package.json version ${nextRelease.version}, received ${manifest.version}`
    );
  }

  await git(['add', '--force', '--', ...releaseFiles], { cwd, env });

  const stagedFiles = (await git(['diff', '--cached', '--name-only'], { cwd, env }))
    .split('\n')
    .filter(Boolean);
  const missingFiles = releaseFiles.filter(file => !stagedFiles.includes(file));
  if (missingFiles.length > 0) {
    throw new Error(`Release files were not staged: ${missingFiles.join(', ')}`);
  }

  await git(
    [
      '-c',
      'user.name=github-actions[bot]',
      '-c',
      'user.email=41898282+github-actions[bot]@users.noreply.github.com',
      'commit',
      '-m',
      `chore(release): v${nextRelease.version} [skip ci]`,
    ],
    { cwd, env }
  );

  nextRelease.gitHead = await git(['rev-parse', 'HEAD'], { cwd, env });
  logger.log('Prepared tag-only release commit %s', nextRelease.gitHead);
}
