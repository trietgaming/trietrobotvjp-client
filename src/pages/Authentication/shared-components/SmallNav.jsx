import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SmallNav = ({ sx }) => {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        my: 2,
        ...sx,
      }}
    >
      <Button variant="contained" color="info" to="/" component={Link}>
        Trang chủ
      </Button>
      <div style={{ margin: "0 1em" }}></div>
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
