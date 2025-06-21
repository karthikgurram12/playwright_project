module.exports = {
  default: [
    "--require-module ts-node/register",
    "--require support/world.ts",
    "--require support/hooks.ts",
    "--require features/**/*.ts",
    "--format json:cucumber-report.json" // 👈 Output JSON for HTML report
  ].join(" ")
};
