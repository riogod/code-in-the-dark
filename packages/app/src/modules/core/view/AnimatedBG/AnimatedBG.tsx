import { FC, ReactNode } from "react";
import { observer } from "mobx-react-lite";
import Box from "@mui/material/Box";
import NotFoundImage from "../../assets/20282271_6205013.svg";
import {useRoute} from "react-router5";
import {useVM} from "../../../../ui/hooks/useVM.ts";
import {GameViewModel} from "../../../code_in_the_dark/viewmodels/game.vm.ts";

const AnimatedBG: FC<{ children: ReactNode }> = ({ children }) => {
  const gameVM = useVM<GameViewModel>(GameViewModel);
  const route = useRoute()


  if(route.route.name === "start"){
    return <Box sx={{
      height: "100vh",
      animation: 'AnimateBG 20s ease infinite',
      backgroundImage: 'url(' + NotFoundImage + ')'
    }}>{children}</Box>;
  }

  const bg = () => {


  if(gameVM.level === 0){

    return <Box sx={{
      height: "100vh",
      width: "100vw",
      position: 'fixed',
      animation: 'AnimateBG 20s ease infinite',
      backgroundImage: 'url(' + NotFoundImage + ')'
    }}/>;
  }
  }

  return <>{bg()}{children}</>;
};

export default observer(AnimatedBG);
