import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";

export default () => {
  const [isOpen, setOpen] = useState();
  const handleToggleModal = () => setOpen((prev) => !prev);

  return (
    <>
      <Button variant="contained" color="success" onClick={handleToggleModal}>
        Tạo mã ngay
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleToggleModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{ pt: 2, pb: 1 }}>
          <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
            Tạo mã PIN 4 chữ số
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleToggleModal}>Disagree</Button>
            <Button
              onClick={handleToggleModal}
              autoFocus
              variant="contained"
              color="secondary"
              fullWidths
            >
              Agree
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};
