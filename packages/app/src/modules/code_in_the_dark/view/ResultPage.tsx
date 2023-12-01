import { FC, ReactNode } from "react";
import { useVM } from "../../../ui/hooks/useVM.ts";
import { GameViewModel } from "../viewmodels/game.vm.ts";
import { useRoute } from "react-router5";

const ResultPage: FC<{ children?: ReactNode }> = ({ children }) => {
  const gameVM = useVM<GameViewModel>(GameViewModel);

  const route = useRoute();
  if (route.route.name === "result") {
    document.open();
    document.write(gameVM.code);
    document.close();

    return null;
  }

  return children;
};

export default ResultPage;
