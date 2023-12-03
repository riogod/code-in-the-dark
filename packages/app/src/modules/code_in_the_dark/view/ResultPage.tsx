import { FC, ReactNode, useState } from "react";
import { useVM } from "../../../ui/hooks/useVM.ts";
import { GameViewModel } from "../viewmodels/game.vm.ts";
import { useRoute } from "react-router5";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OverlayController from "./components/OverlayController.tsx";

const ResultPage: FC<{ children?: ReactNode }> = ({ children }) => {
  const gameVM = useVM<GameViewModel>(GameViewModel);
  const [overlayValue, setOverlayValue] = useState(0);

  const overlayControllerHandler = (
    _event: Event,
    newValue: number | number[],
  ) => {
    setOverlayValue(newValue as number);
  };
  const [ref, setRef] = useState<HTMLIFrameElement | null>();
  const mountedDoc = ref?.contentWindow?.document;
  if (ref && ref.contentWindow) {
    const isRefStyle = mountedDoc?.getElementById("referece-css");

    const styleElement = ref.contentWindow.document.createElement("style");
    styleElement.setAttribute("id", "referece-css");
    styleElement.setAttribute("type", "text/css");
    styleElement.textContent = `
                body:before {
                  content: "";
                   position: absolute;
                  width: 100%;
                  height: 100%;
                  background-image: url(${
                    "." + gameVM.challengeConfig.reference
                  });
                  background-position: top left;
                  background-repeat: no-repeat;
                  background-size: cover;
                  background-color: black;
                  opacity: ${overlayValue};
                  padding: 0;
                  margin: 0;
                }
    `;

    if (isRefStyle) {
      mountedDoc?.getElementById("referece-css")?.replaceWith(styleElement);
    } else {
      mountedDoc?.head.appendChild(styleElement);
    }
  }

  const route = useRoute();
  if (route.route.name === "result") {
    return (
      <Box>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            top: 0,
            left: 0,
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <iframe
            id="result"
            srcDoc={gameVM.code}
            ref={setRef}
            style={{
              width: "100vw",
              height: "100vh",
              border: "none",
            }}
          />

          <Box
            sx={{
              display: "flex",
              width: 1,
              justifyContent: "center",
              position: "fixed",
              top: 0,
            }}
          >
            <OverlayController
              value={overlayValue}
              onChangeHandler={overlayControllerHandler}
            />
          </Box>
          <Box sx={{ position: "fixed", bottom: 0 }}>
            <Typography
              sx={{
                fontFamily: "PressStart2P-Regular",
                fontSize: 40,
                w: 1,
                pl: 2,
                pr: 2,
                background:
                  "linear-gradient(225deg, rgba(247, 138, 140, 0.8), rgba(253, 130, 182, 0.8))",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {gameVM.userName}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  return children;
};

export default ResultPage;
