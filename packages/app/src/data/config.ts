import BigButtonConfig from "./button/config";
import BannerConfig from "./banner/config";

export interface IChallengeConfig {
  name: string;
  instructions?: string;
  reference?: string;
  asserts?: string[];
}

export const challengesConfig: IChallengeConfig[] = [
  BigButtonConfig,
  BannerConfig,
];
