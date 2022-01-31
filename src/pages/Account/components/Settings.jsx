import NavTabs from "../../../global-components/Navigation/components/NavTabs";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useLogout from "@appHooks/useLogout";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Toolbar from "@mui/material/Toolbar";
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import AreYouSure from "../../../global-components/AreYouSure";
import Hidden from "@mui/material/Hidden";

const SettingMenu = ({ handleOpenLogoutModal }) => {
  const tabList = useRef([
    { path: "/account", label: "CÀI ĐẶT CƠ BẢN", exact: true },
    { path: "/account/advanced", label: "CÀI ĐẶT NÂNG CAO" },
    { path: "/account/password-change", label: "THAY ĐỔI MẬT KHẨU" },
  ]).current;

  return (
    <Box
      sx={{
        width: "250px",
        visibility: "visible",
        position: { xs: "relative", xl: "fixed" },
        left: 0,
        flexShrink: 0,
      }}
    >
      <Hidden lgUp>
        <Toolbar />
        <Toolbar />
      </Hidden>
      <Typography
        variant="h6"
        color="inherit"
        align="center"
        fontWeight="bold"
        sx={{ mt: 4, mb: 2 }}
      >
        TÀI KHOẢN
      </Typography>
      <NavTabs
        TabList={tabList}
        orientation="vertical"
        sx={{
          width: "100%",
          "& > *": { width: "100%" },
          "& .MuiTab-root": {
            height: "60px!important",
          },
        }}
      />
      <Button
        variant="contained"
        color="error"
        onClick={handleOpenLogoutModal}
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          my: 3,
        }}
      >
        Đăng xuất
      </Button>
    </Box>
  );
};

const Settings = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };
  const handleLogout = useLogout();
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const handleOpenLogoutModal = () => {
    setLogoutModalOpen(true);
  };
  const handleCloseLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  return (
    <>
      {isLogoutModalOpen && (
        <AreYouSure
          action={handleLogout}
          handleClose={handleCloseLogoutModal}
          isOpen={isLogoutModalOpen}
          content={{
            title: "Bạn có muốn đăng xuất?",
            body: "Sau khi đăng xuất, bạn sẽ phải đăng nhập lại. Bạn có muốn tiếp tục?",
            buttonLabel: "Đăng xuất",
          }}
        />
      )}
      <Hidden lgUp>
        <button
          onClick={handleDrawerToggle}
          style={{
            display: "none",
          }}
          id="account-drawer-toggler"
        />
        <SwipeableDrawer
          anchor="left"
          open={!!isOpen}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerToggle}
          sx={{
            zIndex: { xs: 3, md: 4, lg: 1 },
            width: "500px!important",
            position: "fixed",
            borderBlock: "none",
            visibility: {
              xs: "visible",
              lg: "hidden",
            },
          }}
          disableSwipeToOpen
        >
          <SettingMenu {...{ handleOpenLogoutModal }} />
        </SwipeableDrawer>
      </Hidden>
      <Hidden lgDown>
        <SettingMenu {...{ handleOpenLogoutModal }} />
      </Hidden>
    </>
  );
};

export default Settings;
