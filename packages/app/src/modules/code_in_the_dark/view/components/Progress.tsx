import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { observer } from "mobx-react-lite";
import { useVM } from "../../../../ui/hooks/useVM.ts";
import { GameViewModel } from "../../viewmodels/game.vm.ts";
import { AppSettingsViewModel } from "../../../core/viewmodels/appSettings.vm.ts";
import Box from "@mui/material/Box";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    background:
      "linear-gradient(90deg, rgba(0,255,173,1) 0%, rgba(197,253,29,1) 50%, rgba(69,252,98,1) 100%)",
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Progress = () => {
  const gameVM = useVM<GameViewModel>(GameViewModel);
  const appVM = useVM<AppSettingsViewModel>(AppSettingsViewModel);
  const timer = appVM.timer * 5;
  const currentTimer = gameVM.progressTicker;

  const calcTime = (currentTimer / timer) * 100;
  return (
    <Box sx={{ width: 1 }}>
      <BorderLinearProgress variant="determinate" value={calcTime} />
    </Box>
  );
};

export default observer(Progress);
