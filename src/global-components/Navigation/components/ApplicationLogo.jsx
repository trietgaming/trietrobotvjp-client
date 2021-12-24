import StyledNavButton from "./StyledNavButton";
import { AppLogo } from "@assets/icons";
import Typography from "@mui/material/Typography";

const ApplicationLogo = (props) => {
  return (
    <StyledNavButton
      disableRipple
      sx={{
        ml: -1,
        mr: 4,
        ":hover": { backgroundColor: "transparent" },
        ":active": {
          transition: "none",
        },
        ...props.sx,
      }}
    >
      <AppLogo sx={{ mr: 2 }} fontSize="large" />
      <Typography variant="h6" component="h6" sx={{ textTransform: "none" }}>
        TrietRobotVjp
      </Typography>
    </StyledNavButton>
  );
};

export default ApplicationLogo;
