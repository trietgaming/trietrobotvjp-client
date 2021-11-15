import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "50%",
        right: "50%",
        transform: "translate(50%, 50%)",
        textAlign: "center",
        width: "100%",
        ".MuiAppBar-root": {
          display: "none"
        }
      }}
    >
      <Typography variant="h1" color="primary" sx={{ fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant="h6" color="secondary" sx={{ mt: 2, mb: 3, mx: 3 }}>
        Trang bạn đang muốn tìm có vẻ như không tồn tại, hoặc đã bị xóa nhưng
        cũng có thể là tạm thời không truy cập được.
      </Typography>
      <Box>
        <Button variant="contained" sx={{ mr: 2 }} to="/" component={Link}>
          Trang chủ
        </Button>
        <Button variant="outlined" onClick={() => window.history.back()}>
          Quay lại
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
