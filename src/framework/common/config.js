const path = require("path");
const fs = require("fs");
const merge = require("deepmerge");
const prettier = require("prettier");

const ALLOWED_FW = ["shopify", "bigcommerce", "shopify_local"];
const FALLBACK_FW = "shopify";

function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name;

  if (!framework) {
    throw new Error(
      "The api framework is missing, please add a valid provider to next.config.mjs"
    );
  }

  if (!ALLOWED_FW.includes(framework)) {
    throw new Error(
      `The api framework: ${framework} cannot be found, please use one of ${ALLOWED_FW.join(", ")}`
    );
  }

  if (framework === "shopify_local") {
    framework = FALLBACK_FW;
  }

  const frameworkNextConfig = require(
    path.join("../", framework, "next.config")
  );

  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(__dirname, "../../../", "tsconfig.json");
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths["@framework"] = [
    `./src/framework/${framework}`,
  ];
  tsConfig.compilerOptions.paths["@framework/*"] = [
    `./src/framework/${framework}/*`,
  ];

  //   fs.writeFileSync(
  //     tsPath,
  //     await prettier.format(JSON.stringify(tsConfig), { parser: "json" })
  //   );
  fs.writeFileSync(tsPath, JSON.stringify(tsConfig, null, 2));

  return config;
}

module.exports = { withFrameworkConfig };
