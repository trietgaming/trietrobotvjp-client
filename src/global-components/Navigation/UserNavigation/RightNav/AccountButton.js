import { Button, Avatar, Hidden } from "@mui/material";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import AccountMenu from "../AccountMenu";

const AccountButton = () => {
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);
  const toggleMenuEl = useRef(null);
  const { currentUser } = useSelector((state) => state.auth);

  const handleAccountMenuClose = () => {
    return setAccountMenuOpen(false);
  };

  return (
    <>
      <Button
        color="secondary"
        startIcon={
          <Avatar
            src={currentUser.photoURL || "default-avatar.jpg"}
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
