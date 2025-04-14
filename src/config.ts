import { homedir } from "node:os";
import { read } from "rc9";

export interface IUserConfig {
  dify_url?: string;
  token?: string;
}
export const rcOptions = { dir: homedir(), name: ".package2readme" };
export const config = read<IUserConfig>(rcOptions);
