import { IRoutes } from "@todo/core";
import { lazy } from "react";
import { Container } from "inversify";
import { GameModel } from "../models/game.model.ts";

export const API_ROUTES = {
  START: "start",
  GAME: "game",
  RESULT: "result",
};

export const routes: IRoutes = [
  {
    name: API_ROUTES.START,
    path: "/start",
    menu: {
      text: "start",
    },
    pageComponent: lazy(() => import("../view/StartPage.tsx")),
    onEnter: (router, _fs, _ts) => {
      const di = router.getDependencies().di as Container;
      const model = di.get<GameModel>(GameModel);

      if (model.start) {
        return;
      }

      model.dispose();
    },
  },
  {
    name: API_ROUTES.GAME,
    path: "/game",
    menu: {
      text: "game",
    },
    pageComponent: lazy(() => import("../view/GamePage.tsx")),
    onEnter: (router, _fs, ts) => {
      const di = router.getDependencies().di as Container;
      const model = di.get<GameModel>(GameModel);
      if (!ts) {
        model.gameUpdate();
      }
    },
  },
  {
    name: API_ROUTES.RESULT,
    path: "/result",
    menu: {
      text: "result",
    },
  },
];
