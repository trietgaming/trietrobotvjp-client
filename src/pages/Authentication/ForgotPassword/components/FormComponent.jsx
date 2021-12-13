import { useFormikContext } from "formik";
import TextField from "@mui/material/TextField";

const FormComponent = () => {
  const {
    values: { email },
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormikContext();
  return (
    <TextField
      label="Nhập email của bạn"
      fullWidth
      sx={{ my: 3 }}
      name="email"
      type="email"
      value={email}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.email && Boolean(errors.email)}
      helperText={touched.email && errors.email}
    />
  );
};
export default FormComponent;
