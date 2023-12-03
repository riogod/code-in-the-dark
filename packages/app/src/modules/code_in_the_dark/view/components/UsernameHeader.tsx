import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useVM } from "../../../../ui/hooks/useVM.ts";
import { GameViewModel } from "../../viewmodels/game.vm.ts";
import Typography from "@mui/material/Typography";

const UsernameHeader: FC = () => {
  const gameVM = useVM<GameViewModel>(GameViewModel);

  return (
    <Typography
      sx={{
        fontFamily: "PressStart2P-Regular",
        fontSize: 20,
        w: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {gameVM.userName}
    </Typography>
  );
};

export default observer(UsernameHeader);
