import fs from "node:fs";

const manifest = JSON.parse(fs.readFileSync(new URL("./package.json", import.meta.url), "utf8"));
const lockPath = new URL("./pnpm-lock.yaml", import.meta.url);
let lock = fs.readFileSync(lockPath, "utf8");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const expected = { ...manifest.dependencies, ...manifest.devDependencies };
for (const [name, specifier] of Object.entries(expected)) {
  const pattern = new RegExp(`(      ${escapeRegExp(name)}:\\n        specifier: )[^\\n]+`);
  if (!pattern.test(lock)) throw new Error(`Importer entry not found for ${name}.`);
  lock = lock.replace(pattern, `$1${specifier}`);
}

const directVite = /      vite:\n        specifier: 8\.1\.3\n        version: 8\.1\.3\([^\n]+\)\n/;
if (!directVite.test(lock)) throw new Error("Temporary direct Vite pin was not generated.");
lock = lock.replace(directVite, "");

fs.writeFileSync(lockPath, lock);
