import { CSSProperties, useRef, MutableRefObject, ReactChild } from "react";
import { SnackbarAction, SnackbarKey, SnackbarProvider } from "notistack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { MouseEventHandler } from "react";
import { SnackbarOrigin } from "@mui/material";

const AppSnackbarProvider = ({ children }: { children: ReactChild }) => {
  const notistackRef = useRef() as MutableRefObject<SnackbarProvider>;

  const onClickDismiss = (key: SnackbarKey) =>
    (() => {
      notistackRef?.current?.closeSnackbar(key);
    }) as MouseEventHandler;

  const action = useRef(((key) => (
    <IconButton onClick={onClickDismiss(key)}>
      <CloseIcon sx={{ color: "inherit" }} />
    </IconButton>
  )) as SnackbarAction).current;

  const style = useRef({ borderRadius: "10px" } as CSSProperties).current;

  const anchorOrigin = useRef({
    vertical: "bottom",
    horizontal: "center",
  } as SnackbarOrigin).current;

  return (
    <SnackbarProvider
      ref={notistackRef}
      action={action}
      anchorOrigin={anchorOrigin}
      style={style}
    >
      {children}
    </SnackbarProvider>
  );
};

export default AppSnackbarProvider;
