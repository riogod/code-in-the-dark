import { FC, lazy, ReactNode, Suspense } from "react";
import { observer } from "mobx-react-lite";
import Box from "@mui/material/Box";
import StartScreenBG from "../../assets/20282271_6205013.svg";
import { useRoute } from "react-router5";
import { useVM } from "../../../../ui/hooks/useVM.ts";
import { GameViewModel } from "../../../code_in_the_dark/viewmodels/game.vm.ts";

const AnimatedBG: FC<{ children: ReactNode }> = ({ children }) => {
  const gameVM = useVM<GameViewModel>(GameViewModel);
  const route = useRoute();

  const Level0BG = lazy(() => import("./Level0BG.tsx"));
  const Level1BG = lazy(() => import("./Level1BG.tsx"));
  const Level2BG = lazy(() => import("./Level2BG.tsx"));
  const Level3BG = lazy(() => import("./Level3BG.tsx"));
  const Level4BG = lazy(() => import("./Level4BG.tsx"));
  const Level5BG = lazy(() => import("./Level5BG.tsx"));

  if (route.route.name === "start") {
    return (
      <Box
        sx={{
          height: "100vh",
          animation: "AnimateBG 20s ease infinite",
          backgroundImage: "url(" + StartScreenBG + ")",
          backgroundSize: "110%",
          backgroundColor: "rgba(16, 20, 24, 1)",
        }}
      >
        {children}
      </Box>
    );
  }

  const bg = () => {
    switch (gameVM.level) {
      case 0:
        return <Level0BG />;
      case 1:
        return <Level1BG />;
      case 2:
        return <Level2BG />;
      case 3:
        return <Level3BG />;
      case 4:
        return <Level4BG />;
      case 5:
        return <Level5BG />;
      default:
        return <Level0BG />;
    }
  };

  return (
    <>
      <Suspense
        fallback={
          <Box
            sx={{
              height: "100vh",
              width: "100vw",
              position: "fixed",
              backgroundColor: "black",
              opacity: 0.4,
            }}
          />
        }
      >
        {bg()}
      </Suspense>
      {children}
    </>
  );
};

export default observer(AnimatedBG);
