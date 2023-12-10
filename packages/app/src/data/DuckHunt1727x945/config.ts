import txt from "./data.md?raw";
import imgUrl from "./DuckHunt1727x945.png";
import { IChallengeConfig } from "../config.ts";
import "./dh_selector.svg";
import "./dh_logo_duck.png";
import "./dh_logo_hunt.png";

export default {
  name: "(1727x945) Duck Hunt",
  instructions: txt,
  reference: imgUrl,
} as IChallengeConfig;
