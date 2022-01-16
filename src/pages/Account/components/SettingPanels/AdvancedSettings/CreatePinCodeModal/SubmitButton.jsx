import Button from "@mui/material/Button";
import { useFormikContext } from "formik";

const SubmitButton = () => {
  const { handleSubmit, dirty } = useFormikContext();
  return (
    <Button
      onClick={handleSubmit}
      variant="contained"
      color="secondary"
      sx={{ width: "12rem", mt: 3 }}
      disabled={!dirty}
      type="submit"
      id="pin-code-submit"
    >
      Tạo ngay
    </Button>
  );
};

export default SubmitButton;
