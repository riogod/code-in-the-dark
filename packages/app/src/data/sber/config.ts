import txt from "./data.md?raw";
import imgUrl from "./todo.png";
import { IChallengeConfig } from "../config.ts";
import svg from "./shopify-logo.svg";

export default {
  name: "Sber",
  instructions: txt,
  reference: imgUrl,
  asserts: [svg],
} as IChallengeConfig;
