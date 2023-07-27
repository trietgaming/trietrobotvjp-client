import StyledNavButton from "./StyledNavButton";
import { AppLogo } from "@assets/icons";
import Typography from "@mui/material/Typography";
import { useRef } from "react";
import { SxProps } from "@mui/material";

const ApplicationLogo = ({ sx }: { sx: SxProps }) => {
  const styles = useRef({
    StyledNavButton: {
      ml: -1,
      mr: 4,
      ":hover": { backgroundColor: "transparent" },
      ":active": {
        transition: "none",
      },
      ...sx,
    },
    AppLogo: { mr: 2 },
    Typography: { textTransform: "none" },
  }).current;
  return (
    <StyledNavButton disableRipple sx={styles.StyledNavButton}>
      <AppLogo sx={styles.AppLogo} fontSize="large" />
      <Typography variant="h6" component="h6" sx={styles.Typography}>
        TrietRobotVjp
      </Typography>
    </StyledNavButton>
  );
};

export default ApplicationLogo;
