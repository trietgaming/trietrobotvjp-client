import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
import ApplicationLogo from "../components/ApplicationLogo";
import CenterNav from "./CenterNav";
import RightNav from "./RightNav";
import MobileNav from "./Mobile/MobileNav";

const UserNavigation = () => {
  console.log("rerender nav");
  return (
    <AppBar
      position="sticky"
      sx={{
        top: {
          xs: "-56px",
          sm: "-64px",
          lg: "0",
        },
      }}
    >
      <Hidden lgUp>
        <Toolbar>
          <ApplicationLogo />
        </Toolbar>
      </Hidden>
      <AppBar position="sticky" sx={{ boxShadow: "0" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: { md: "0 1.2em!important", xs: "0 0 0 1em!important" },
          }}
        >
          <Hidden lgDown>
            <ApplicationLogo sx={{ flexGrow: 0, display: "flex" }} />
          </Hidden>
          <Hidden mdUp>
            <MobileNav />
          </Hidden>
          <CenterNav />
          <RightNav />
        </Toolbar>
      </AppBar>
    </AppBar>
  );
};

export default UserNavigation;
