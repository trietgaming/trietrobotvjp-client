import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Help from "@mui/icons-material/Help";
import ChangeThemeModeButton from "./ChangeThemeModeButton";
import useLogout from "@customHooks/useLogout";
import { Link } from "react-router-dom";
import { useState } from "react";
import AreYouSure from "@components/AreYouSure";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import FlagIcon from "@mui/icons-material/Flag";

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
              width: 250,
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
        >
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          Cài đặt tài khoản
        </MenuItem>
        <MenuItem onClick={handleAccountMenuClose}>
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          Hỗ trợ
        </MenuItem>
        <MenuItem
          onClick={handleAccountMenuClose}
          to="/report"
          component={Link}
        >
          <ListItemIcon>
            <FlagIcon />
          </ListItemIcon>
          Tố cáo
        </MenuItem>
        <MenuItem
          onClick={handleAccountMenuClose}
          to="/bug-report"
          component={Link}
        >
          <ListItemIcon>
            <AnnouncementIcon />
          </ListItemIcon>
          Báo lỗi
        </MenuItem>
        <Divider />
        <ChangeThemeModeButton sx={{ my: 1 }} />
        <Divider />
        <MenuItem onClick={handleToggleLogoutModal}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
