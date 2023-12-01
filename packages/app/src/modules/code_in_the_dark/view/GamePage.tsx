import { FC, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { html } from "@codemirror/lang-html";
import TimerTicker from "./components/TimerTicker.tsx";
import Box from "@mui/material/Box";
import { useVM } from "../../../ui/hooks/useVM.ts";
import { GameViewModel } from "../viewmodels/game.vm.ts";
import Reference from "./components/Reference.tsx";

const GamePage: FC = () => {
  const gameVM = useVM<GameViewModel>(GameViewModel);

  const onChange = useCallback((val: any, _viewUpdate: any) => {
    gameVM.update(val);
  }, []);

  const theme = draculaInit({
    settings: {
      background: "transparent",
      selectionMatch: "#D6D6D6",
      gutterBorder: "#dddddd",
      gutterActiveForeground: "",
    },
  });
  return (
    <Box sx={{ h: 1 }}>
      <TimerTicker />
      <CodeMirror
        className="code-mirror"
        value={gameVM.code}
        height="100%"
        autoFocus
        theme={theme}
        extensions={[html()]}
        basicSetup={{
          foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          highlightActiveLine: false,
          indentOnInput: false,
        }}
        onChange={onChange}
      />
      <Box sx={{ position: "fixed", bottom: 0, right: 0 }}>
        {" "}
        <Reference />
      </Box>
    </Box>
  );
};

export default GamePage;
