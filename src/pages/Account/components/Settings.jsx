import NavTabs from "@components/Navigation/components/NavTabs";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import useLogout from "@customHooks/useLogout";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowRightIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import AreYouSure from "@components/AreYouSure";
import Hidden from "@mui/material/Hidden";

const SettingMenu = ({ handleOpenLogoutModal }) => (
  <Box
    sx={{
      width: "250px",
      visibility: "visible",
      position: { xs: "relative", xl: "absolute" },
      left: 0,
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
      TabList={[
        { path: "/account", label: "CÀI ĐẶT CƠ BẢN", exact: true },
        { path: "/account/advanced", label: "CÀI ĐẶT NÂNG CAO" },
      ]}
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
        <Hidden mdDown implementation="css">
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: "primary.main",
              top: "50%",
              color: "white",
              transform: "translate(50%,-50%)",
              position: "fixed",
              left: isOpen ? 210 : { xs: -31, lg: -10 },
              transition: ".2s ease-in-out",
              zIndex: { xs: 10000, lg: 2 },
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
            id="account-drawer-toggler"
          >
            {isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </IconButton>
        </Hidden>
        <Drawer
          variant="temporary"
          anchor="left"
          open={isOpen}
          onClose={handleDrawerToggle}
          sx={{
            zIndex: { xs: 3, lg: 1 },
            width: "500px!important",
            position: "fixed",
            borderBlock: "none",
            visibility: {
              xs: "visible",
              lg: "hidden",
            },
          }}
        >
          <SettingMenu {...{ handleOpenLogoutModal }} />
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <SettingMenu {...{ handleOpenLogoutModal }} />
      </Hidden>
    </>
  );
};

export default Settings;
