import Lottie from "lottie-react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Level2Animation from "./lottie-bg/level2.json";

const Level2BG: FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        backgroundColor: "#15123F",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.3,
      }}
    >
      <Box
        sx={{
          height: "80vh",
          width: "80vw",
        }}
      >
        <Lottie animationData={Level2Animation} loop={true} />
      </Box>
    </Box>
  );
};

export default Level2BG;
