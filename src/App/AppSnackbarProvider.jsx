import { useRef } from "react";
import { SnackbarProvider } from "notistack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const AppSnackbarProvider = ({ children }) => {
  const notistackRef = useRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      ref={notistackRef}
      action={(key) => (
        <IconButton onClick={onClickDismiss(key)}>
          <CloseIcon sx={{ color: "inherit" }} />
        </IconButton>
      )}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      style={{ borderRadius: "10px" }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default AppSnackbarProvider;
