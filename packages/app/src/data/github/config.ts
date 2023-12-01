import txt from "./data.md?raw";
import imgUrl from "./git-ref.png";
import { IChallengeConfig } from "../config.ts";

export default {
  name: "GitHub",
  instructions: txt,
  reference: imgUrl,
} as IChallengeConfig;
