import MenuIcon from "@mui/icons-material/Menu";
import MobileNavDrawer from "./MobileNavDrawer";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const MobileNav = () => {
  const [isNavShowing, setNavShowing] = useState(false);

  const showNav = (showStatus) => {
    setNavShowing((prevStatus) => showStatus);
  };

  return (
    <Hidden mdUp>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
        onClick={() => showNav(true)}
      >
        <MenuIcon />
      </IconButton>
      <MobileNavDrawer
        show={isNavShowing}
        hideNav={() => showNav(false)}
        onOpen={() => showNav(true)}
      />
    </Hidden>
  );
};

export default MobileNav;
