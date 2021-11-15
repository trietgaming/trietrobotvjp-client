import { createRef } from "react";
import { SnackbarProvider } from "notistack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const notistackRef = createRef();
const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key);
};

const AppSnackbarProvider = ({ children }) => {
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
    >
      {children}
    </SnackbarProvider>
  );
};

export default AppSnackbarProvider;
