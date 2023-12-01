import { IRoutes } from "@todo/core";
import {API_ROUTES} from "../../code_in_the_dark/config/routes.ts";


export const CORE_ROUTES = {
  HOME: "home",
  404: "404",
};

export const routes: IRoutes = [
  {
    name: CORE_ROUTES.HOME,
    path: "/",
    forwardTo: API_ROUTES.START,
  },
  {
    name: CORE_ROUTES[404],
    path: "/404",
  },
];
