import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Hidden from "@mui/material/Hidden";
import { useState, useRef } from "react";
import AccountMenu from "../AccountMenu";
import defaultAvatar from "@assets/images/default-avatar.jpg";
import useUser from "@appHooks/useUser";

const AccountButton = () => {
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);
  const toggleMenuEl = useRef(null);

  const currentUser = useUser();

  const handleAccountMenuClose = () => {
    return setAccountMenuOpen(false);
  };

  return (
    <>
      <Button
        color="contrast"
        startIcon={
          <Avatar
            src={currentUser.photoURL || defaultAvatar}
            alt="userAvatar"
            sx={{ borderRadius: "100%" }}
          />
        }
        onClick={() => setAccountMenuOpen(true)}
        sx={{ textTransform: "none" }}
        ref={toggleMenuEl}
      >
        {currentUser.displayName && (
          <Hidden lgDown>{currentUser.displayName}</Hidden>
        )}
      </Button>
      <AccountMenu
        isAccountMenuOpen={isAccountMenuOpen}
        handleAccountMenuClose={handleAccountMenuClose}
        toggleMenuEl={toggleMenuEl}
      />
    </>
  );
};

export default AccountButton;
