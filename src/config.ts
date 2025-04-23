import { homedir } from "node:os";
import { read } from "rc9";

export interface IUserConfig {
  base_url: string;
  llm_token: string;
  model: string;
}
export const rcOptions = { dir: homedir(), name: ".package2readme" };
export const config = read<IUserConfig>(rcOptions);
