import { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import SubmitButton from "./SubmitButton";
import PinField from "./PinField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CreatePinCodeModalComponent = ({ isOpen, handleToggleModal }) => {
  const pinFieldRef = useRef();
  const pinFieldConfirmRef = useRef();

  const handleComplete = (keyName) => {
    keyName === "pinCode" && pinFieldConfirmRef.current.textInput[0].focus();
  };

  const handleBack = (keyName) => {
    keyName === "pinCodeConfirm" && pinFieldRef.current.textInput[3].focus();
  };

  console.log("reredne");
  return (
    <>
      <Dialog open={isOpen} onClose={handleToggleModal}>
        <Box sx={{ pt: 2, pb: 1 }}>
          <DialogTitle sx={{ textAlign: "center" }}>
            Tạo mã PIN 4 chữ số
          </DialogTitle>
          <IconButton
            onClick={handleToggleModal}
            sx={{ position: "absolute", top: ".4em", right: ".5em" }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent sx={{ py: 1 }}>
            <DialogContentText>
              Đây là mật khẩu của bạn để xác thực giao dịch. Hãy đảm bảo rằng
              bạn sẽ nhớ và giữ kín nó
            </DialogContentText>
          </DialogContent>
          <DialogTitle sx={{ textAlign: "center" }}>Nhập mã PIN</DialogTitle>
          <PinField ref={pinFieldRef} onComplete={handleComplete} />
          <DialogTitle sx={{ textAlign: "center" }}>
            Nhập lại mã PIN
          </DialogTitle>
          <PinField
            keyName="pinCodeConfirm"
            ref={pinFieldConfirmRef}
            onBack={handleBack}
          />
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <SubmitButton />
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default CreatePinCodeModalComponent;
