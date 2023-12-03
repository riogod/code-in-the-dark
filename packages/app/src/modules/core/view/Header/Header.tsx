import { FC } from "react";
import { observer } from "mobx-react-lite";
import Toolbar from "@mui/material/Toolbar";
import SettingsIcon from "@mui/icons-material/Settings";
import { IProps } from "./interfaces.tsx";
import { AppBarStyled } from "./components/AppBarStyled.tsx";
import { useTranslation } from "react-i18next";
import IconButton from "../../../../ui/components/IconButton";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useVM } from "../../../../ui/hooks/useVM.ts";
import { GameViewModel } from "../../../code_in_the_dark/viewmodels/game.vm.ts";
import ComunityLogoImage from "../../assets/comunity-logo.svg?react";
import UsernameHeader from "../../../code_in_the_dark/view/components/UsernameHeader.tsx";
import LevelsHeader from "../../../code_in_the_dark/view/components/LevelsHeader.tsx";

const Header: FC<IProps> = ({ open, handleAppSettingsOpen }) => {
  const { t } = useTranslation("common");
  const gameVM = useVM<GameViewModel>(GameViewModel);
  return (
    <AppBarStyled open={open} color="transparent">
      <Toolbar
        sx={{
          height: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ pl: 5 }}>
          <ComunityLogoImage height="50" width="150" />
        </Box>
        {!gameVM.start && (
          <>
            <Box>
              {!gameVM.start && (
                <IconButton
                  icon={<SettingsIcon fontSize="small" />}
                  color="primary"
                  size="small"
                  variant="outlined"
                  aria-label={t("settings.OPEN")}
                  title={t("settings.OPEN")}
                  onClick={handleAppSettingsOpen}
                />
              )}
            </Box>
          </>
        )}
        {gameVM.start && (
          <>
            <LevelsHeader />
            <UsernameHeader />
          </>
        )}
      </Toolbar>
      <Divider />
    </AppBarStyled>
  );
};

export default observer(Header);
