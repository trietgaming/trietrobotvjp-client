import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import { useRef, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Notifications = () => {
  const notificationButtonRef = useRef(null);

  const [isOpen, setOpen] = useState(false);

  const handleNotificationToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <IconButton
        sx={{ mx: 2 }}
        ref={notificationButtonRef}
        onClick={handleNotificationToggle}
      >
        <NotificationsIcon />
      </IconButton>
      <Menu
        open={isOpen}
        anchorEl={notificationButtonRef.current}
        keepMounted
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleNotificationToggle}
      >
        <Container sx={{ "&  *": { mt: 1 } }}>
          <Box sx={{ width: { xs: 250, sm: 350 } }}>
            <Typography variant="h6">Thông báo</Typography>
            <Divider />
            <Box
              height={550}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                height="100%"
                sx={{ overflow: "auto", overflowWrap: "break-word" }}
              >
                {false ? (
                  true
                ) : (
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Danh sách trống.
                  </Typography>
                )}
              </Box>
              <Box>
                <Divider />
                <Button disabled={true} fullWidth>
                  Xóa tất cả
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Menu>
    </>
  );
};

export default Notifications;
