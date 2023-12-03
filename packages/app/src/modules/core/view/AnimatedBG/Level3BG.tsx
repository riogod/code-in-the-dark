import Lottie from "lottie-react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Level3Animation from "./lottie-bg/level3.json";

const Level3BG: FC = () => {
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
      <Box
        sx={{
          height: "50vh",
          width: "50vw",
          position: "fixed",
          backgroundColor: "black",
        }}
      >
        <Lottie animationData={Level3Animation} loop={true} />
      </Box>
    </Box>
  );
};

export default Level3BG;
