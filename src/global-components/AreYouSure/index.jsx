import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const AreYouSure = ({
  isOpen,
  handleClose,
  action,
  content: { title, body, buttonLabel },
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose} sx={{ zIndex: 999999 }}>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button color="info" variant="contained" onClick={action} autoFocus>
          {buttonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AreYouSure;
