import dh943Config from "./DuckHunt1920x943/config";
import dh945Config from "./DuckHunt1727x945/config";
import dh1300Config from "./DuckHunt1920x1300/config";
import contra943Config from "./Contra1920x943/config";
import contra945Config from "./Contra1727x945/config";
import contra1300Config from "./Contra1920x1300/config";
import bman943Config from "./Bomberman1920x943/config";
import bman945Config from "./Bomberman1727x945/config";
import bman1300Config from "./Bomberman1920x1300/config";
import bcity943Config from "./BattleCity1920x943/config";
import bcity945Config from "./BattleCity1727x945/config";
import bcity1300Config from "./BattleCity1920x1300/config";
import mario943Config from "./Mario1920x943/config";
import mario945Config from "./Mario1727x945/config";
import mario1300Config from "./Mario1920x1300/config";

export interface IChallengeConfig {
  name: string;
  instructions?: string;
  reference?: string;
  asserts?: string[];
}

export const challengesConfig: IChallengeConfig[] = [
  dh943Config,
  dh945Config,
  dh1300Config,
  contra943Config,
  contra945Config,
  contra1300Config,
  bman943Config,
  bman945Config,
  bman1300Config,
  bcity943Config,
  bcity945Config,
  bcity1300Config,
  mario943Config,
  mario945Config,
  mario1300Config,
];
