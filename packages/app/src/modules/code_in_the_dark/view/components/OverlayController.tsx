import { FC } from "react";
import Box from "@mui/material/Box";
import { Slider } from "@mui/material";

interface IProps {
  value: number;
  onChangeHandler: (_event: Event, newValue: number | number[]) => void;
}
const OverlayController: FC<IProps> = ({ value, onChangeHandler }) => {
  return (
    <Box
      sx={(theme) => ({
        width: 300,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.8,
        borderRadius: 2,
        p: 4,
        mt: 2,
        backgroundColor: theme.palette.background.default,
        zIndex: 50,
      })}
    >
      <Slider
        value={value}
        onChange={onChangeHandler}
        step={0.1}
        marks
        min={0}
        max={1}
      />
    </Box>
  );
};

export default OverlayController;
