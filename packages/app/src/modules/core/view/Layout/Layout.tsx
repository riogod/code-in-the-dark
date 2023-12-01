import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { Header } from "../Header";
import AppSettingsDrawer from "../AppSettingsDrawer";
import ContentContainer from "../ContentContainer";
import Toolbar from "@mui/material/Toolbar";
import { Notifier } from "../Notifier";
import AnimatedBG from "../AnimatedBG/AnimatedBG";
import Box from "@mui/material/Box";

const Layout: FC = () => {
  const [open, setOpen] = useState(false);
  const [openAppSettings, setOpenAppSettings] = useState(false);

  const openAppSettingsHandler = () => {
    setOpenAppSettings(true);
  };

  const closeAppSettingsHandler = () => {
    setOpenAppSettings(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AnimatedBG>
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleAppSettingsOpen={openAppSettingsHandler}
      />
      <Box sx={{ w: 1, height: "calc(100% - 64px)" }}>
        <Toolbar disableGutters />
        <ContentContainer />
      </Box>
      <AppSettingsDrawer
        drawerWidth={360}
        open={openAppSettings}
        closeHandler={closeAppSettingsHandler}
      />
      <Notifier />
    </AnimatedBG>
  );
};

export default observer(Layout);
