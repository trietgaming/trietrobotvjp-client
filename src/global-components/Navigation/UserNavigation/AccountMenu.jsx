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

const AccountMenu = ({
  toggleMenuEl,
  isAccountMenuOpen,
  handleAccountMenuClose,
}) => {
  const handleLogoutClick = useLogout();
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
          mt: 0.5,
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
      <MenuItem
        onClick={handleAccountMenuClose}
        to="/account"
        component={Link}
        sx={{ mt: 0.5 }}
      >
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
