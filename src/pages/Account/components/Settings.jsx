import NavTabs from "@components/Navigation/components/NavTabs";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import useLogout from "@customHooks/useLogout";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowRightIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import AreYouSure from "@components/AreYouSure";

const Settings = () => {
  const isWideWidth = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const [isOpen, setOpen] = useState(isWideWidth);

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
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          backgroundColor: "info.main",
          color: "white",
          top: "50%",
          transform: "translate(50%,-50%)",
          position: "fixed",
          left: isOpen ? 210 : { xs: -31, lg: -10 },
          transition: ".2s ease-in-out",
          zIndex: { xs: 10000, lg: 2 },
          "&:hover": {
            backgroundColor: "info.dark",
          },
        }}
      >
        {isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      </IconButton>
      <Drawer
        variant={isWideWidth ? "persistent" : "temporary"}
        anchor="left"
        open={isOpen}
        onClose={handleDrawerToggle}
        sx={{
          zIndex: { xs: 9999, lg: 1 },
          width: "500px!important",
          position: "fixed",
        }}
      >
        <Box sx={{ width: "250px" }}>
          <Toolbar />
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
          <Divider sx={{ my: 3 }} />
          <Button
            variant="contained"
            color="error"
            onClick={handleOpenLogoutModal}
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
            }}
          >
            Đăng xuất
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Settings;
