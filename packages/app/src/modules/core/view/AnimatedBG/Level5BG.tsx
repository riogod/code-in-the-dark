import Lottie from "lottie-react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Level5Animation from "./lottie-bg/level5.json";

const Level5BG: FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#191919",
        opacity: 0.7,
      }}
    >
      <Lottie animationData={Level5Animation} loop={true} />
    </Box>
  );
};

export default Level5BG;
