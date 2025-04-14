import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import * as https from "node:https";
import * as process from "node:process";
import axios from "axios";
import { readPackageJSON } from "pkg-types";
import { write } from "rc9";
import { joinURL } from "ufo";
import { config, rcOptions } from "./config";
import { logger } from "./logger";

export async function run() {
  if (!config.dify_url) {
    const difyUrl = await logger.prompt("Please Input Dify Url", {
      type: "text",
    });
    if (!difyUrl) {
      logger.error("Dify Url not found.");
      process.exit(1);
    }
    config.dify_url = difyUrl;
    write(config, rcOptions);
  }
  if (!config.token) {
    const difyToken = await logger.prompt("Please Input Dify Token", {
      type: "text",
    });
    if (!difyToken) {
      logger.error("Dify Token not found.");
      process.exit(1);
    }
    config.token = difyToken;
    write(config, rcOptions);
  }
  const localPackageJson = await readPackageJSON();
  const result = await axios(
    joinURL(config.dify_url, "/workflows/run"),
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${config.token}`,
        "Content-Type": "application/json",
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      data: {
        inputs: { package: JSON.stringify(localPackageJson) },
        user: "test",
        response_mode: "blocking",
      },
    },
  );
  const markdownDict = result.data.data.outputs as Record<string, string>;
  if (!existsSync("./readme")) {
    mkdirSync("./readme");
  }
  Object.keys(markdownDict).forEach((key) => {
    if (key === "en") {
      writeFileSync("README.md", markdownDict[key]);
    }
    else {
      writeFileSync(`./readme/README-${key.toUpperCase()}.md`, markdownDict[key]);
    }
  });
}
