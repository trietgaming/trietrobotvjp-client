import MenuIcon from "@mui/icons-material/Menu";
import MobileNavDrawer from "./MobileNavDrawer";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const MobileNav = () => {
  const [isNavShowing, setNavShowing] = useState(false);

  const showNav = (showStatus) => {
    setNavShowing(() => showStatus);
  };

  return (
    <>
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
    </>
  );
};

export default MobileNav;
