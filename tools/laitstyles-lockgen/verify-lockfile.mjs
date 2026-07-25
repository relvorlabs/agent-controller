import crypto from "node:crypto";
import fs from "node:fs";

const expectedBaseSha = "e44b6a11b99d3b347915689e0076b3ffbf980519";
const path = new URL("./pnpm-lock.yaml", import.meta.url);
const generated = fs.readFileSync(path, "utf8");

const blocks = [
  "      zustand:\n        specifier: ^5.0.14\n        version: 5.0.14(@types/react@19.2.17)(react@19.2.4)(use-sync-external-store@1.6.0(react@19.2.4))\n",
  "\n  zustand@5.0.14:\n    resolution: {integrity: sha512-/8tAspM5LMPr28b3fwLYrtdj77ECpfZviaP75CMTnwO8ISyaE4GDIG/9rDDYq/cH9D2Xw2A2RXglLInmVBQB/g==}\n    engines: {node: '>=12.20.0'}\n    peerDependencies:\n      '@types/react': '>=18.0.0'\n      immer: '>=9.0.6'\n      react: '>=18.0.0'\n      use-sync-external-store: '>=1.2.0'\n    peerDependenciesMeta:\n      '@types/react':\n        optional: true\n      immer:\n        optional: true\n      react:\n        optional: true\n      use-sync-external-store:\n        optional: true\n",
  "\n  zustand@5.0.14(@types/react@19.2.17)(react@19.2.4)(use-sync-external-store@1.6.0(react@19.2.4)):\n    optionalDependencies:\n      '@types/react': 19.2.17\n      react: 19.2.4\n      use-sync-external-store: 1.6.0(react@19.2.4)\n",
];

let stripped = generated;
for (const block of blocks) {
  const count = stripped.split(block).length - 1;
  if (count !== 1) throw new Error(`Expected one generated Zustand block, found ${count}.`);
  stripped = stripped.replace(block, "");
}

const bytes = Buffer.from(stripped);
const reconstructedBaseSha = crypto
  .createHash("sha1")
  .update(`blob ${bytes.length}\0`)
  .update(bytes)
  .digest("hex");
const report = {
  expectedBaseSha,
  reconstructedBaseSha,
  generatedBytes: Buffer.byteLength(generated),
  exactMatch: reconstructedBaseSha === expectedBaseSha,
};
fs.writeFileSync(new URL("./lockfile-validation.json", import.meta.url), `${JSON.stringify(report, null, 2)}\n`);
console.log(report);
if (!report.exactMatch) throw new Error("Generated dependency graph contains unrelated drift.");
