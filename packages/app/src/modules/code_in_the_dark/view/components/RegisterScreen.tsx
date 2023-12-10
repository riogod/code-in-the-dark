import { ChangeEvent, FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { useVM } from "../../../../ui/hooks/useVM.ts";
import { GameViewModel } from "../../viewmodels/game.vm.ts";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useTranslation } from "react-i18next";
import TextField from "@mui/material/TextField";
import KeyReturnSVG from "../../assets/key-return.svg?react";
import { InputAdornment } from "@mui/material";
import { useRouter } from "react-router5";
import { useGlitchStyles } from "./glitchStyles.ts";

const RegisterScreen: FC = () => {
  const gameVM = useVM<GameViewModel>(GameViewModel);
  const router = useRouter();
  const classes = useGlitchStyles();

  const [value, setValue] = useState("");

  const { t } = useTranslation("api");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toUpperCase());
  };

  const onEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      startHandler()
    }
  };

  const startHandler = () => {
      gameVM.gameStart(value);
      router.navigate("game");
  }
  
  const titleText = String(t("user.enter-name"))

  const welcomMessage = (
    <>
      <Typography
        className={classes.glicthDataText}
        data-text={titleText}
        sx={{
          fontFamily: "PressStart2P-Regular",
          fontSize: 45,
          display: "flex",
          justifyContent: "center",
          mb: 10,
        }
    }
      >
        {titleText}
      </Typography>
    </>
  );

  return (
    <Card
      sx={{
        width: 1,
        p: 5,
        minHeight: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: 'rgba(16, 20, 24, 0.95)',
          borderRadius: 0,
          // border: '16px solid #F62DDC',
          borderWidth: 20,
          borderStyle: 'solid',
          borderImage: ' linear-gradient(45deg, slateblue, coral) ',
          boxShadow: '4px 4px 20px 10px rgba(0, 0, 0, 0.5) inset'
      }}
    >
      <CardContent>
        {welcomMessage}
        <TextField
          fullWidth
          id="filled-start-adornment"
          autoFocus
          value={value}
          onChange={onChangeHandler}
          onKeyDown={onEnterHandler}
          InputProps={{
            style: {
              fontSize: 60,
              fontFamily: "PressStart2P-Regular",
            },
            endAdornment: (
              <InputAdornment position="start" onClick={startHandler}>
                <KeyReturnSVG
                  style={{
                    width: 90,
                    height: 90,
                    opacity: value ? 1 : 0.1,
                    fill: "#F62DDC",
                    filter: "drop-shadow(13px 15px 12px rgb(0 0 0 / 0.7))",
                    cursor: value ? "pointer" : "default",
                  }}
                />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default observer(RegisterScreen);
