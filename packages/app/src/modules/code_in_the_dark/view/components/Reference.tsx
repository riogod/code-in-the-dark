import { FC, useState } from "react";
import { observer } from "mobx-react-lite";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { GameViewModel } from "../../viewmodels/game.vm.ts";
import { useVM } from "../../../../ui/hooks/useVM.ts";
import { useRouter } from "react-router5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  minHeight: 600,
  maxHeight: 700,
  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "auto",
  p: 4,
};

const styleRef = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minHeight: "auto",
  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "auto",
};

const Reference: FC = () => {
  const gameVM = useVM<GameViewModel>(GameViewModel);
  const router = useRouter();

  const [openInstruction, setOpenInstruction] = useState(false);
  const [openReference, setOpenReference] = useState(false);

  const handleOpenInstruction = () => setOpenInstruction(true);
  const handleCloseInstruction = () => setOpenInstruction(false);
  const handleOpenReference = () => setOpenReference(true);
  const handleCloseReference = () => setOpenReference(false);

  const finish = () => {
    router.navigate("result");
  };
  const modalInstruction = (
    <Modal open={openInstruction} onClose={handleCloseInstruction}>
      <Box sx={style}>
        <Box
          sx={{
            "& p": {
              whiteSpace: "pre-line",
            },
            "& pre": {
              whiteSpace: "pre-line",
            },
          }}
        >
          <Markdown remarkPlugins={[remarkGfm]}>
            {gameVM.challengeConfig.instructions}
          </Markdown>
        </Box>
      </Box>
    </Modal>
  );

  const modalReference = (
    <Modal open={openReference} onClose={handleCloseReference}>
      <Box sx={styleRef}>
        <img
          src={gameVM.challengeConfig.reference}
          alt="todo"
          style={{ width: 1000 }}
        />
      </Box>
    </Modal>
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <Box sx={{ m: 1, cursor: "pointer" }} onClick={handleOpenReference}>
        <img
          src={gameVM.challengeConfig.reference}
          alt="todo"
          style={{ width: 250 }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", p: 1 }}>
        <Button variant="contained" onClick={handleOpenInstruction}>
          <Typography
            sx={{
              fontFamily: "PressStart2P-Regular",
              fontSize: 18,
              display: "flex",
              justifyContent: "center",
            }}
          >
            ИНСТРУКЦИЯ
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{ ml: 1 }}
          color="success"
          onClick={finish}
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
      </Box>
      {modalInstruction}
      {modalReference}
    </Box>
  );
};

export default observer(Reference);
