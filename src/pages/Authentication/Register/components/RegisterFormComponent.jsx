import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { AboveComponent, LowerComponent } from "./InputlessComponent";
import { useState } from "react";
import PasswordField from "../../shared-components/PasswordField";

const RegisterFormComponent = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  status: { error: submitError },
  isSubmitting,
  isValid,
  dirty,
}) => {
  const [isShowPassword, setShowPassword] = useState(false);

  return (
    <Container maxWidth="sm" sx={{ px: { xs: 0, sm: "initial" } }}>
      <Paper
        elevation={5}
        sx={{
          py: 5,
          visibility: { xs: "hidden", sm: "visible" },
        }}
      >
        <Container sx={{ visibility: "visible", px: 3 }}>
          <AboveComponent />
          <TextField
            fullWidth
            name="username"
            label="Tên người dùng"
            type="text"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
            sx={{ mb: 2, mt: 3 }}
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            sx={{ mb: 2 }}
          />
          <PasswordField
            fullWidth
            name="password"
            label="Mật khẩu"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            sx={{ mb: 2 }}
            showPassword={isShowPassword}
            onShowAndHide={() => setShowPassword((prev) => !prev)}
          />
          <PasswordField
            fullWidth
            name="passwordConfirmation"
            label="Nhập lại mật khẩu"
            type="password"
            value={values.passwordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.passwordConfirmation &&
              Boolean(errors.passwordConfirmation)
            }
            helperText={
              touched.passwordConfirmation && errors.passwordConfirmation
            }
            showPassword={isShowPassword}
            onShowAndHide={() => setShowPassword((prev) => !prev)}
          />
          <LowerComponent
            {...{ loading: isSubmitting, submitError, isValid, dirty }}
          />
        </Container>
      </Paper>
    </Container>
  );
};

export default RegisterFormComponent;
