import SberConfig from "./sber/config";
import GitHubConfig from "./github/config";

export interface IChallengeConfig {
  name: string;
  instructions?: string;
  reference?: string;
  asserts?: string[];
}

export const challengesConfig: IChallengeConfig[] = [SberConfig, GitHubConfig];
