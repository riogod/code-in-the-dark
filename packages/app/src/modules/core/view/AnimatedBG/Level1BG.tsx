import { FC } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
  titleSmall: {
    fontSize: '40px',
  },
  box: {
    color: '#595b5e',
    fontSize: '80px',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "PressStart2P-Regular",
    animation: '$bigSize 2s infinite ease normal',
  },
  '@keyframes bigSize': {
    '0%': {
      transform: 'scale(1)'
    },
    '50%': {
      transform: 'scale(1.5)'
    },
    '100%': {
      transform: 'scale(1)'
    }
  }
}));

const Level1BG: FC = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.box}
      sx={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
      }}
    >
      CODE
      <div className={classes.titleSmall}>IN THE</div>
      DARK
    </Box>
  );
};

export default Level1BG;
