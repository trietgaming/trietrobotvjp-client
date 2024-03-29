import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import Help from "@mui/icons-material/Help";
import ChangeThemeModeButton from "./ChangeThemeModeButton";
import useLogout from "@appHooks/useLogout";
import { Link } from "react-router-dom";
import { useState } from "react";
import AreYouSure from "../../../global-components/AreYouSure";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import FlagIcon from "@mui/icons-material/Flag";
import Avatar from "@mui/material/Avatar";
import useUser from "@appHooks/useUser";
import defaultAvatar from "@assets/images/default-avatar.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AccountMenu = ({
  toggleMenuEl,
  isAccountMenuOpen,
  handleAccountMenuClose,
}) => {
  const handleLogout = useLogout();
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const handleToggleLogoutModal = () => {
    setLogoutModalOpen((prev) => !prev);
  };
  const user = useUser("photoURL", "displayName");
  console.log("rerender ACCOUNT MENU");
  return (
    <>
      {isLogoutModalOpen && (
        <AreYouSure
          action={handleLogout}
          handleClose={handleToggleLogoutModal}
          isOpen={isLogoutModalOpen}
          content={{
            title: "Bạn có muốn đăng xuất?",
            body: "Sau khi đăng xuất, bạn sẽ phải đăng nhập lại. Bạn có muốn tiếp tục?",
            buttonLabel: "Đăng xuất",
          }}
        />
      )}
      <Menu
        anchorEl={toggleMenuEl.current}
        keepMounted
        open={isAccountMenuOpen}
        onClose={handleAccountMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 0.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "& .MuiMenuItem-root": {
              height: 50,
              width: 280,
              borderRadius: "15px",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={handleAccountMenuClose}
          to="/account"
          component={Link}
          sx={{ width: "auto!important", height: "auto!important" }}
        >
          <Box
            display="flex"
            sx={{ justifyContent: "flex-start", width: "100%" }}
          >
            <Avatar
              sx={{ width: "56px!important", height: "56px!important" }}
              src={user.photoURL || defaultAvatar}
            />
            <Box
              display="flex"
              sx={{
                justifyContent: "space-evenly",
                flexDirection: "column",
                width: "100%",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">{user.displayName}</Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleAccountMenuClose}>
          <ListItemIcon>
            <Help sx={{ color: "info.main" }} />
          </ListItemIcon>
          Hỗ trợ
        </MenuItem>
        <MenuItem
          onClick={handleAccountMenuClose}
          to="/report"
          component={Link}
        >
          <ListItemIcon>
            <FlagIcon sx={{ color: "secondary.main" }} />
          </ListItemIcon>
          Tố cáo
        </MenuItem>
        <MenuItem
          onClick={handleAccountMenuClose}
          to="/bug-report"
          component={Link}
        >
          <ListItemIcon>
            <AnnouncementIcon sx={{ color: "warning.main" }} />
          </ListItemIcon>
          Báo lỗi
        </MenuItem>
        <Divider />
        <ChangeThemeModeButton sx={{ my: 1 }} />
        <Divider />
        <MenuItem onClick={handleToggleLogoutModal}>
          <ListItemIcon>
            <Logout sx={{ color: "error.main" }} />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
