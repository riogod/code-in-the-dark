import Lottie from "lottie-react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Level4Animation from "./lottie-bg/level4.json";

const Level4BG: FC = () => {
  return (
    <Box
      sx={{
        height: "130vh",
        width: "130vw",
        position: "fixed",
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        backgroundColor: "black",
        opacity: 0.4,
      }}
    >
      <Lottie
        animationData={Level4Animation}
        loop={true}
        height="130vh"

        // style={{ height: "100vh" }}
      />
    </Box>
  );
};

export default Level4BG;
