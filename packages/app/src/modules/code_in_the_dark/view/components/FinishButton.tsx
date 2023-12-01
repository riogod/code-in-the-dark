import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import { useRouter } from "react-router5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 300,

  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "auto",
  p: 4,
};

const FinishButton: FC = () => {
  const router = useRouter();

  const [openConfirmation, setOpenConfirmation] = useState(false);

  const handleOpenConfirmation = () => setOpenConfirmation(true);
  const handleCloseConfirmation = () => setOpenConfirmation(false);

  const finish = () => {
    router.navigate("result");
  };

  const modalConfirmation = (
    <Modal open={openConfirmation} onClose={handleCloseConfirmation}>
      <Box sx={style}>
        <Typography
          sx={{
            fontFamily: "PressStart2P-Regular",
            fontSize: 45,
            w: 1,
            display: "flex",
            justifyContent: "center",
            mb: 10,
            textShadow:
              "-5px 5px 0px #09AEC8, -10px 10px 0px #01cccc, -15px 15px 0px #00bdbd",
          }}
        >
          ВЫ УВЕРЕНЫ?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{ mr: 2, pl: 5, pr: 5 }}
            color="success"
            onClick={finish}
            autoFocus
          >
            <Typography
              sx={{
                fontFamily: "PressStart2P-Regular",
                fontSize: 18,
                display: "flex",
                justifyContent: "center",
              }}
            >
              ДА
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ ml: 2, pl: 5, pr: 5 }}
            color="error"
            onClick={handleCloseConfirmation}
          >
            <Typography
              sx={{
                fontFamily: "PressStart2P-Regular",
                fontSize: 18,
                display: "flex",
                justifyContent: "center",
              }}
            >
              НЕТ
            </Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );

  return (
    <>
      <Button
        variant="contained"
        sx={{ ml: 1 }}
        color="success"
        onClick={handleOpenConfirmation}
      >
        <Typography
          sx={{
            fontFamily: "PressStart2P-Regular",
            fontSize: 18,
            display: "flex",
            justifyContent: "center",
          }}
        >
          ГОТОВО!
        </Typography>
      </Button>
      {modalConfirmation}
    </>
  );
};

export default observer(FinishButton);
