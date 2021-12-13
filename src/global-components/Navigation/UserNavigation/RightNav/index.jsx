import Toolbar from "@mui/material/Toolbar";
import Notifications from "./Notifications";
import AccountButton from "./AccountButton";
import { useLocation } from "react-router";

const RightNav = () => {
  const location = useLocation();
  const toolBarBorderBottom = location.pathname.startsWith("/account")
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
      <Notifications />
      <AccountButton />
    </Toolbar>
  );
};

export default RightNav;
