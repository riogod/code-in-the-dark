import { FC } from "react";
import Box from "@mui/material/Box";
import Level0BGImage from "../../assets/level0bg.png";

const Level1BG: FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        backgroundColor: "black",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.3,
        backgroundImage: "url(" + Level0BGImage + ")",
        animation: "background-power 2s infinite both",
      }}
    />
  );
};

export default Level1BG;
