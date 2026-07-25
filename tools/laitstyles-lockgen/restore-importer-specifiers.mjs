import fs from "node:fs";

const manifest = JSON.parse(fs.readFileSync(new URL("./package.json", import.meta.url), "utf8"));
const pinned = JSON.parse(fs.readFileSync(new URL("./package-pinned.json", import.meta.url), "utf8"));
const lockPath = new URL("./pnpm-lock.yaml", import.meta.url);
let lock = fs.readFileSync(lockPath, "utf8");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function yamlKey(name) {
  return name.startsWith("@") ? `'${escapeRegExp(name)}'` : escapeRegExp(name);
}

const expected = { ...manifest.dependencies, ...manifest.devDependencies };
for (const [name, specifier] of Object.entries(expected)) {
  const pattern = new RegExp(`(      ${yamlKey(name)}:\\n        specifier: )[^\\n]+`);
  if (!pattern.test(lock)) throw new Error(`Importer entry not found for ${name}.`);
  lock = lock.replace(pattern, `$1${specifier}`);
}

const pinnedEntries = { ...pinned.dependencies, ...pinned.devDependencies };
const temporaryPins = Object.keys(pinnedEntries).filter((name) => !(name in expected));
for (const name of temporaryPins) {
  const pattern = new RegExp(
    `      ${yamlKey(name)}:\\n        specifier: [^\\n]+\\n        version: [^\\n]+\\n`,
  );
  if (!pattern.test(lock)) throw new Error(`Temporary importer pin was not generated for ${name}.`);
  lock = lock.replace(pattern, "");
}

fs.writeFileSync(lockPath, lock);
