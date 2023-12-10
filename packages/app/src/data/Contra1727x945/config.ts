import txt from "./data.md?raw";
import imgUrl from "./Contra1727x945.png";
import { IChallengeConfig } from "../config.ts";
import "./contra_brothers.png"; //(440x319)
import "./contra_konami_logo.png"; //(487x102)
import "./contra_logo.png"; //(991x361)
import "./contra_selector.png"; //(85x50)

export default {
  name: "(1727x945) Contra",
  instructions: txt,
  reference: imgUrl,
} as IChallengeConfig;
