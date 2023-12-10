import txt from "./data.md?raw";
import imgUrl from "./Bomberman1727x945.png";
import { IChallengeConfig } from "../config.ts";
import "./bman_logo.png"; // (926x519)
import "./bman_selector.svg"; // (45x39)

export default {
  name: "(1727x945) Bomberman",
  instructions: txt,
  reference: imgUrl,
} as IChallengeConfig;
