import { Tabs, Tab, Paper, Typography, Button, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../../firebase/auth/logout";

const Settings = ({ currentTabValue, handleTabChange }) => {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <Paper sx={{ width: "15em" }}>
      <Typography variant="h6" color="inherit" align="center" sx={{ my: 2 }}>
        TÀI KHOẢN
      </Typography>
      <Tabs
        value={currentTabValue}
        onChange={handleTabChange}
        orientation="vertical"
        sx={{
          "& > *": {
            width: "100%",
          },
        }}
      >
        <Tab label="CÀI ĐẶT CƠ BẢN" index={0} />
        <Tab label="CÀI ĐẶT NÂNG CAO" />
      </Tabs>
      <Divider sx={{ my: 3 }} />
      <Button
        variant="contained"
        color="error"
        sx={{ ml: "50%", transform: "translateX(-50%)", width: "80%" }}
        onClick={handleLogoutClick}
      >
        Đăng xuất
      </Button>
    </Paper>
  );
};

export default Settings;
