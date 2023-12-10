import txt from "./data.md?raw";
import imgUrl from "./Mario1727x945.png";
import { IChallengeConfig } from "../config.ts";
import "./background_brushes.png"; // (351x99)
import "./background_green_mountain.png"; // (292x191)
import "./mario_briсks_cube.png"; // (82x82)
import "./mario_question_cube.png"; // (82x82)
import "./mario_ground_sprite.png"; // (82x82)
import "./mario_cloud.png"; // (357x152)
import "./mario_character.png"; // (72x86)
import "./mario_enemy.png"; // (91x86)

export default {
  name: "(1727x945) Mario",
  instructions: txt,
  reference: imgUrl,
} as IChallengeConfig;
