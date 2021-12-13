import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SmallNav = ({ sx }) => {
  return (
    <Toolbar
      sx={{
        position: "relative",
        mb: 2,
        ...sx,
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
