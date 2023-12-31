import "reflect-metadata";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import "./main.css";
import { Bootstrap, initBootstrap } from "./bootstrap";
import { appConfig } from "./config/app";
import { app_modules } from "./modules/modules";
import { RouterProvider } from "react-router5";
import { DIProvider } from "./ui/providers/DIProvider";
import { configure } from "mobx";
import ThemeSchema from "./modules/core/view/ThemeSchema";
import { Layout } from "./modules/core/view/Layout";
import { I18nextProvider } from "react-i18next";
import ResultPage from "./modules/code_in_the_dark/view/ResultPage.tsx";

configure({ enforceActions: "observed", useProxies: "ifavailable" });

initBootstrap(new Bootstrap(app_modules), appConfig)
  .then(async (bootstrap) => {
    bootstrap.routerService.router.start(() => {
      ReactDOM.createRoot(document.getElementById("root")!).render(
        <RouterProvider router={bootstrap.routerService.router}>
          <DIProvider container={bootstrap.di}>
            <I18nextProvider i18n={bootstrap.i18n}>
              <ThemeSchema>
                <CssBaseline />
                <ResultPage>
                  <Layout />
                </ResultPage>
              </ThemeSchema>
            </I18nextProvider>
          </DIProvider>
        </RouterProvider>,
      );
    });
  })
  .catch((error: any) => {
    console.error(error);
  });
