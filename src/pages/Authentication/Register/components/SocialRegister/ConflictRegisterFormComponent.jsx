import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormikContext } from "formik";

const InputField = () => {
  const { values, handleChange, handleBlur, touched, errors } =
    useFormikContext();
  return (
    <TextField
      fullWidth
      name="password"
      label="Mât khẩu"
      type="password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.password && Boolean(errors.password)}
      helperText={touched.password && errors.password}
      sx={{ mb: 2, mt: 3 }}
    />
  );
};

const SubmitButton = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      fullWidth
      variant="contained"
      type="submit"
      onClick={handleSubmit}
      id="submit-btn"
    >
      Liên kết và đăng nhập
    </Button>
  );
};

const ConflictRegisterFormComponent = ({
  payload: { email, discord_id: discordId },
}) => {
  return (
    <>
      <Typography variant="h5" textAlign="center">
        Liên kết tài khoản
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 1, mb: 4 }}>
        Email gắn với tài khoản Discord này đã tồn tại trong hệ thống. Vui lòng
        xác nhận quyền sở hữu tài khoản để đăng nhập cũng như liên kết Discord
        với tài khoản này.
      </Typography>
      <TextField
        fullWidth
        label="ID Discord"
        type="text"
        value={discordId}
        disabled
      />
      <TextField
        fullWidth
        label="Email"
        type="text"
        value={email}
        disabled
        sx={{ mt: 3 }}
      />
      <InputField />
      <SubmitButton />
    </>
  );
};

export default ConflictRegisterFormComponent;
