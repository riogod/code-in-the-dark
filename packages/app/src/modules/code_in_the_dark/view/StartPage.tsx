import { FC } from "react";
import Container from "@mui/material/Container";
import RegisterScreen from "./components/RegisterScreen.tsx";
import { GameViewModel } from "../viewmodels/game.vm.ts";
import { useVM } from "../../../ui/hooks/useVM.ts";
import { useRouter } from "react-router5";

const StartPage: FC = () => {
  const gameVM = useVM<GameViewModel>(GameViewModel);
  const router = useRouter();

  if (gameVM.start) {
    router.navigate("game");
  }
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RegisterScreen />
    </Container>
  );
};

export default StartPage;
