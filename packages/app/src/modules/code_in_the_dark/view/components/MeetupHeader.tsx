import { FC } from "react";
import Box from "@mui/material/Box";
import MeetupLogoImage from "../../assets/meetup-logo.svg?react";

const MeetupHeader: FC = () => {
  return (
    <Box sx={{ h: 150 }}>
      <MeetupLogoImage
        height="100"
        style={{ filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" }}
      />
    </Box>
  );
};

export default MeetupHeader;
