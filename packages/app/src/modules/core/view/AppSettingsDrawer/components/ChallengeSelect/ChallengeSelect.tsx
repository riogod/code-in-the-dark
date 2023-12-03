import { FC, SyntheticEvent } from "react";
import { Observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useVM } from "../../../../../../ui/hooks/useVM.ts";
import { GameViewModel } from "../../../../../code_in_the_dark/viewmodels/game.vm.ts";

const ChallengeSelect: FC = () => {
  const { t } = useTranslation("common");
  const gameVM = useVM<GameViewModel>(GameViewModel);

  const handleLanguageChange = (
    _event: SyntheticEvent<Element, Event>,
    newValue: string,
  ) => {
    const item = gameVM.allChanges.find((value) => value.name === newValue);
    if (item) {
      gameVM.setChallenge(item);
    }
  };

  return (
    <Observer>
      {() => (
        <>
          <Typography variant="subtitle2" color="text.secondary">
            {t("settings.REFERENCE.reference")}
          </Typography>
          <Autocomplete
            id="select-reference"
            options={gameVM.allChanges.map((value) => value.name)}
            autoHighlight
            value={gameVM.challengeConfig.name}
            disableClearable
            onChange={handleLanguageChange}
            getOptionLabel={(option) => option}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        </>
      )}
    </Observer>
  );
};

export default ChallengeSelect;
