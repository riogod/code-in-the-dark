import { FC, ReactNode } from "react";
import { observer } from "mobx-react-lite";
import Box from "@mui/material/Box";

const AnimatedBG: FC<{ children: ReactNode }> = ({ children }) => {
  return <Box sx={{ height: "100vh" }}>{children}</Box>;
};

export default observer(AnimatedBG);
