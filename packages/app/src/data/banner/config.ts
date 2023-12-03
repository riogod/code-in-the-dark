import txt from "./data.md?raw";
import imgUrl from "./banner-ref.png";
import { IChallengeConfig } from "../config.ts";
import banner from "./banner-sbercat.svg";

export default {
  name: "(EASY) Banner",
  instructions: txt,
  reference: imgUrl,
  asserts: [banner],
} as IChallengeConfig;
