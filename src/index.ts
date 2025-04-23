import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import * as process from "node:process";
import { createOpenAI } from "@ai-sdk/openai";
import { TriLingua } from "@derufuringa/tri-lingua";
import { generateText } from "ai";
import { readPackageJSON } from "pkg-types";
import { write } from "rc9";
import { config, rcOptions } from "./config";
import { logger } from "./logger";
import { formatReadmePrompt } from "./prompt/formatReadme";
import { generateReadme } from "./prompt/generateReadme";

export async function run() {
  if (!config.base_url) {
    const base_url = await logger.prompt("Please Input OpenAI BaseURL", {
      type: "text",
    });
    if (!base_url) {
      logger.error("OpenAI BaseURL not found.");
      process.exit(1);
    }
    config.base_url = base_url;
    write(config, rcOptions);
  }
  if (!config.llm_token) {
    const openai_token = await logger.prompt("Please Input OpenAI Token", {
      type: "text",
    });
    if (!openai_token) {
      logger.error("OpenAI Token not found.");
      process.exit(1);
    }
    config.llm_token = openai_token;
    write(config, rcOptions);
  }
  if (!config.model) {
    const model_name = await logger.prompt("Please Input OpenAI Model Name", {
      type: "text",
    });
    if (!model_name) {
      logger.error("OpenAI Model not found.");
      process.exit(1);
    }
    config.model = model_name;
    write(config, rcOptions);
  }
  const localPackageJson = await readPackageJSON();
  const iModel = createOpenAI({
    compatibility: "strict",
    baseURL: config.base_url,
    apiKey: config.llm_token,
  });
  logger.start("generate origin markdown...");
  const { text: originMarkdown } = await generateText({
    model: iModel(config.model),

    prompt: generateReadme(JSON.stringify(localPackageJson)),
  });
  logger.success("generate origin markdown complete!");

  logger.start("generate format markdown...");
  const { text: formatedMarkdown } = await generateText({
    model: iModel(config.model),

    system: formatReadmePrompt,
    prompt: originMarkdown,
  });
  writeFileSync("README.md", formatedMarkdown);
  logger.success("generate format markdown complete!");

  if (!existsSync("./readme")) {
    mkdirSync("./readme");
  }
  logger.start("generate Chinese markdown...");
  const { result: cnMarkdown } = await TriLingua(iModel(config.model), "中文", originMarkdown);
  writeFileSync(`./readme/README-CN.md`, cnMarkdown);
  logger.success("generate Chinese markdown complete!");

  logger.start("generate Japanese markdown...");
  const { result: jaMarkdown } = await TriLingua(iModel(config.model), "日文", originMarkdown);
  writeFileSync(`./readme/README-JP.md`, jaMarkdown);
  logger.success("generate Japanese markdown complete!");

  logger.start("generate Russian markdown...");
  const { result: ruMarkdown } = await TriLingua(iModel(config.model), "俄文", originMarkdown);
  writeFileSync(`./readme/README-RU.md`, ruMarkdown);
  logger.success("generate Russian markdown complete!");
}
