import { FC, ReactElement } from "react";
import { observer } from "mobx-react-lite";
import { useVM } from "../../../../ui/hooks/useVM.ts";
import { GameViewModel } from "../../viewmodels/game.vm.ts";
import Typography from "@mui/material/Typography";

const LevelsHeader: FC = () => {
  const gameVM = useVM<GameViewModel>(GameViewModel);

  const level1 = (
    <Typography
      sx={{
        fontFamily: "PressStart2P-Regular",
        fontSize: 20,
      }}
    >
      Perfect!
    </Typography>
  );

  const level2 = (
    <Typography
      sx={{
        fontFamily: "PressStart2P-Regular",
        fontSize: 20,
      }}
    >
      Impressive!
    </Typography>
  );

  const level3 = (
    <Typography
      sx={{
        fontFamily: "PressStart2P-Regular",
        fontSize: 20,
      }}
    >
      Crazy!
    </Typography>
  );

  const level4 = (
    <Typography
      sx={{
        fontFamily: "PressStart2P-Regular",
        fontSize: 20,
      }}
    >
      Are you mad?
    </Typography>
  );

  const level5 = (
    <Typography
      sx={{
        fontFamily: "PressStart2P-Regular",
        fontSize: 20,
        animation: "shake 150ms infinite linear",
      }}
    >
      WOOOOOOOOOOOOW!
    </Typography>
  );

  const levelPhrases: Map<number, ReactElement> = new Map([
    [0, <></>],
    [1, level1],
    [2, level2],
    [3, level3],
    [4, level4],
    [5, level5],
  ]);

  return levelPhrases.get(gameVM.level);
};

export default observer(LevelsHeader);
