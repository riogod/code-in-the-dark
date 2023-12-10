import txt from "./data.md?raw";
import imgUrl from "./BattleCity1727x945.png";
import { IChallengeConfig } from "../config.ts";
import "./bc_logo.png"; // (636x232)
import "./bc_selector.png"; // (43x45)

export default {
  name: "(1727x945) BattleCity",
  instructions: txt,
  reference: imgUrl,
} as IChallengeConfig;
