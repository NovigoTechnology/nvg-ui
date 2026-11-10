import { readFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));
const forbiddenLifecycleScripts = ['preinstall', 'install', 'postinstall', 'prepare', 'prepack'];
const unexpectedScripts = forbiddenLifecycleScripts.filter(name => manifest.scripts?.[name]);

if (manifest.name !== '@novigotechnology/nvg-ui') {
  throw new Error(`Unexpected package name: ${manifest.name}`);
}

if (manifest.repository?.url !== 'git+https://github.com/NovigoTechnology/nvg-ui.git') {
  throw new Error(`Unexpected package repository: ${manifest.repository?.url}`);
}

if (unexpectedScripts.length > 0) {
  throw new Error(`Consumer lifecycle scripts are not allowed: ${unexpectedScripts.join(', ')}`);
}

const [{ files }] = JSON.parse(readFileSync(0, 'utf8'));
const packagedFiles = new Set(files.map(file => file.path));
const requiredFiles = [
  'dist/index.d.ts',
  'dist/nvg-ui.es.js',
  'dist/nvg-ui.umd.js',
  'LICENSE',
  'package.json',
  'README.md',
];
const missingFiles = requiredFiles.filter(file => !packagedFiles.has(file));

if (missingFiles.length > 0) {
  throw new Error(`Missing files in package: ${missingFiles.join(', ')}`);
}

const leakedDevelopmentFiles = files
  .map(file => file.path)
  .filter(
    path => path.startsWith('src/') || path.startsWith('scripts/') || path.startsWith('.github/')
  );

if (leakedDevelopmentFiles.length > 0) {
  throw new Error(`Development files leaked into package: ${leakedDevelopmentFiles.join(', ')}`);
}

console.log(`Package contents validated (${files.length} files).`);
