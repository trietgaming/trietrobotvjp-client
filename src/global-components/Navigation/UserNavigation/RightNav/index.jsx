import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Notifications from "@mui/icons-material/Notifications";
import AccountButton from "./AccountButton";
import { useLocation } from "react-router";

const RightNav = () => {
  const location = useLocation();
  const toolBarBorderBottom =
    location.pathname === "/account"
      ? {
          borderBottomColor: "primary.main",
          borderBottomStyle: "solid",
          borderBottomWidth: "2px",
        }
      : undefined;

  return (
    <Toolbar
      sx={{
        display: "flex",
        padding: "0!important",
        minHeight: "72px !important",
        ...toolBarBorderBottom,
      }}
    >
      <IconButton sx={{ mx: 2 }}>
        <Notifications />
      </IconButton>
      <AccountButton />
    </Toolbar>
  );
};

export default RightNav;
