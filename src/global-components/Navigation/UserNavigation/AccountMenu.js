import { Menu, MenuItem, ListItemIcon, Divider } from "@mui/material";
import { Settings, Logout, Help } from "@mui/icons-material";
import ChangeThemeModeButton from "./ChangeThemeModeButton";
import { useDispatch } from "react-redux";
import { logout } from "../../../firebase/auth/logout";

const AccountMenu = ({
  toggleMenuEl,
  isAccountMenuOpen,
  handleAccountMenuClose,
}) => {
  const dispatch = useDispatch();
  const handleLogoutClick = () => dispatch(logout());
  return (
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
          mt: .5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={handleAccountMenuClose} sx={{ mt: 0.5 }}>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        Cài đặt tài khoản
      </MenuItem>
      <MenuItem onClick={handleAccountMenuClose} sx={{ mt: 0.5 }}>
        <ListItemIcon>
          <Help />
        </ListItemIcon>
        Hỗ trợ
      </MenuItem>
      <ChangeThemeModeButton sx={{ my: 1 }} />
      <Divider />
      <MenuItem onClick={handleLogoutClick}>
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        Đăng xuất
      </MenuItem>
    </Menu>
  );
};

export default AccountMenu;
