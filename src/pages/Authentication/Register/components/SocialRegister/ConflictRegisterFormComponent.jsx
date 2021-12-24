import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormikContext } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import HeaderIcon from "../../../shared-components/HeaderIcon";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Divider from "@mui/material/Divider";

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
  const { handleSubmit, isSubmitting, dirty, isValid } = useFormikContext();
  return (
    <Button
      fullWidth
      variant="contained"
      type="submit"
      onClick={handleSubmit}
      id="submit-btn"
      disabled={isSubmitting || !isValid || !dirty}
    >
      {isSubmitting ? <CircularProgress /> : "Liên kết và đăng nhập"}
    </Button>
  );
};

const ConflictRegisterFormComponent = ({
  payload: { email, discord_id: discordId },
}) => {
  return (
    <>
      <HeaderIcon Icon={AddLinkIcon} />
      <Typography variant="h5" textAlign="center" sx={{ mt: 2 }}>
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
      <Divider sx={{ my: 2 }} />
      <Button component={Link} to="/forgot-password">
        Quên mật khẩu?
      </Button>
    </>
  );
};

export default ConflictRegisterFormComponent;
