import { AppBar, Toolbar, Hidden } from "@mui/material";
import ApplicationLogo from "../components/ApplicationLogo";
import RightNav from "./RightNav";
import CenterNav from "./CenterNav";
import MobileNav from "./MobileNav";

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
          <MobileNav />
          <CenterNav />
          <RightNav />
        </Toolbar>
      </AppBar>
    </AppBar>
  );
};

export default UserNavigation;