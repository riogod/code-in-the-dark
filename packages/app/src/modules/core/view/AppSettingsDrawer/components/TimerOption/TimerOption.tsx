import { ChangeEvent, FC, useState } from "react";
import { Observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import { useVM } from "../../../../../../ui/hooks/useVM.ts";
import { AppSettingsViewModel } from "../../../../viewmodels/appSettings.vm.ts";

const TimerOption: FC = () => {
  const { t } = useTranslation("common");
  const app = useVM<AppSettingsViewModel>(AppSettingsViewModel);

  const [value, setValue] = useState<number | null>(app.timer);

  const handleTimerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setValue(Number(e.target.value));
      app.setTimer(Number(e.target.value));
    }
  };

  return (
    <Observer>
      {() => (
        <>
          <Typography variant="subtitle2" color="text.secondary">
            {t("settings.TIMER.timer")}
          </Typography>
          <TextField
            type="number"
            value={value}
            onChange={handleTimerChange}
            variant="standard"
            fullWidth
          />
        </>
      )}
    </Observer>
  );
};

export default TimerOption;
