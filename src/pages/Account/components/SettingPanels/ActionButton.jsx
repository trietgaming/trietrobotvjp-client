import { JoinedDate } from "./BasicSettings/InputlessComponent";
import Button from "@mui/material/Button";
import { useFormikContext } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import useEnqueueSnackbar from "@customHooks/useEnqueueSnackbar";
import Paper from "@mui/material/Paper";
import Hidden from "@mui/material/Hidden";
import { IconButton } from "@mui/material";
import SettingIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default ({ joinedDate, customReset }) => {
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
          position: { xs: "fixed", md: "relative" },
          bottom: 0,
          left: 0,
          visibility: {
            xs: "visible",
            md: "hidden",
          },
          width: "100%",
          zIndex: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            visibility: "visible",
            alignItems: "center",
            mx: {
              xs: 2,
              md: 0,
            },
          }}
        >
          <Box>
            <Hidden mdDown>
              {joinedDate ? <JoinedDate {...{ joinedDate }} /> : <></>}
            </Hidden>
            <Hidden mdUp>
              <IconButton
                onClick={() =>
                  document.getElementById("account-drawer-toggler")?.click()
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
              {isSubmitting && <CircularProgress size={20} />}
              Lưu
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
