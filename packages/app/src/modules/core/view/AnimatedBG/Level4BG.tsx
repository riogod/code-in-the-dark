import Lottie from "lottie-react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Level4Animation from "./lottie-bg/level4.json";

const Level4BG: FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        opacity: 0.4,
      }}
    >
      <Lottie animationData={Level4Animation} loop={true} />
    </Box>
  );
};

export default Level4BG;
