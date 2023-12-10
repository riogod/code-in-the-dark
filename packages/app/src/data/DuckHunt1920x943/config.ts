import txt from "./data.md?raw";
import imgUrl from "./DuckHunt1920x943.png";
import { IChallengeConfig } from "../config.ts";

export default {
  name: "(1920x943) Duck Hunt",
  instructions: txt,
  reference: imgUrl,
} as IChallengeConfig;
