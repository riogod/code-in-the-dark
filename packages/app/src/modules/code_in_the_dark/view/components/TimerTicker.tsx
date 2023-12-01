import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useVM } from "../../../../ui/hooks/useVM.ts";
import { GameViewModel } from "../../viewmodels/game.vm.ts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Progress from "./Progress.tsx";

const TimerTicker: FC = () => {
  const gameVM = useVM<GameViewModel>(GameViewModel);

  return (
    <Box
      sx={{
        minWidth: 250,
        p: 5,
        height: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "flex-end",
        backgroundColor: "transparent",
        position: "fixed",
        right: 0,
        zIndex: 1,
      }}
    >
      <Typography
        sx={{
          fontFamily: "PressStart2P-Regular",
          fontSize: 24,
          w: 1,
          p: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        combo!
        {/*{gameVM.userName}*/}
      </Typography>
      <Typography
        sx={{
          fontFamily: "PressStart2P-Regular",
          fontSize: 80,

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          animationName: "transform",
          transformOrigin: "center middle",
          animationIterationCount: "infinite",
          animationDuration: "1s",
          animationDirection: "alternate",
          textShadow:
            "-5px 5px 0px #09AEC8, -10px 10px 0px #01cccc, -15px 15px 0px #00bdbd",
        }}
      >
        {gameVM.score}
      </Typography>
      {gameVM.start && (
        // <Box sx={{ width: 1, height: 1, b: 0, position: "fixed" }}>
        <Progress />
        // </Box>
      )}
    </Box>
  );
};

export default observer(TimerTicker);
