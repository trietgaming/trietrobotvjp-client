import { Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const SmallNav = () => {
  return (
    <Toolbar
      sx={{
        position: { xs: "relative", lg: "fixed" },
      }}
    >
      <Button
        variant="contained"
        color="info"
        sx={{ mr: 2 }}
        to="/"
        component={Link}
      >
        Trang chủ
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => window.history.back()}
      >
        Quay lại
      </Button>
    </Toolbar>
  );
};

export default SmallNav;
