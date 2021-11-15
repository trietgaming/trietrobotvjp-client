import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import useLogout from "@customHooks/useLogout";

const Settings = ({ currentTabValue, handleTabChange }) => {
  const handleLogoutClick = useLogout();

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
