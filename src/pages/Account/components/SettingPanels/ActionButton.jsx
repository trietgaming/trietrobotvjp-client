import Container from "@mui/material/Container";
import { JoinedDate } from "./BasicSettings/InputlessComponent";
import Button from "@mui/material/Button";
import { useFormikContext } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import useEnqueueSnackbar from "@customHooks/useEnqueueSnackbar";

export default ({ joinedDate, customReset }) => {
  const { isSubmitting, handleSubmit, dirty, isValid, resetForm } =
    useFormikContext();
  const enqueueSnackbar = useEnqueueSnackbar();
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between" }}>
      <Container sx={{ display: "flex" }} disableGutters>
        {joinedDate && <JoinedDate {...{ joinedDate }} />}
      </Container>
      <Container
        disableGutters
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          sx={{ mt: 3, mb: 2, mr: 2 }}
          onClick={
            customReset ||
            (() => {
              resetForm();
              enqueueSnackbar({ message: "Đã hủy thay đổi", variant: "info" });
            })
          }
          disabled={isSubmitting || !dirty}
        >
          Hủy
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="info"
          sx={{ mt: 3, mb: 2 }}
          disabled={isSubmitting || !dirty || !isValid}
        >
          {isSubmitting && <CircularProgress size={20} sx={{ mr: 1 }} />}
          Lưu
        </Button>
      </Container>
    </Container>
  );
};
