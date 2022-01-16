import Button from "@mui/material/Button";
import { useFormikContext } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import useEnqueueSnackbar from "@appHooks/useEnqueueSnackbar";
import Paper from "@mui/material/Paper";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import SettingIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const ActionButton = ({ customReset }) => {
  const { isSubmitting, handleSubmit, dirty, isValid, resetForm } =
    useFormikContext();
  const enqueueSnackbar = useEnqueueSnackbar();
  return (
    <>
      <Hidden mdUp>
        <Toolbar />
      </Hidden>
      <Paper
        sx={{
          position: { xs: "fixed", md: "sticky" },
          bottom: 0,
          left: 0,
          boxShadow: { md: "none" },
          width: "100%",
          zIndex: 4,
          visibility: "visible",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            visibility: "visible",
            alignItems: "center",
            mx: 2,
          }}
        >
          <Box>
            <Hidden lgUp>
              <IconButton
                onClick={() =>
                  document.getElementById("account-drawer-toggler").click()
                }
              >
                <SettingIcon />
              </IconButton>
            </Hidden>
          </Box>
          <Box sx={{ my: 2, display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={
                customReset ||
                (() => {
                  resetForm();
                  enqueueSnackbar({
                    message: "Đã hủy thay đổi",
                    variant: "info",
                  });
                })
              }
              disabled={isSubmitting || !dirty}
              sx={{ mr: 2 }}
            >
              Hủy
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              disabled={isSubmitting || !dirty || !isValid}
            >
              {isSubmitting && <CircularProgress size={20} sx={{ mr: 2 }} />}
              Lưu
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ActionButton;
