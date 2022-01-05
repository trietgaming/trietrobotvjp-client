import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { LowerComponent, AboveComponent } from "./InputlessComponent";
import PasswordField from "../../shared-components/PasswordField";
import { useState } from "react";

const LoginFormComponent = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  handleSubmit,
  status: { error: submitError },
  isSubmitting,
}) => {
  const [isShowPassword, setShowPassword] = useState(false);
  return (
    <Container
      maxWidth="xs"
      component="form"
      onSubmit={handleSubmit}
      sx={{ px: { xs: 0.5, sm: "initial" } }}
    >
      <Paper
        elevation={5}
        sx={{
          borderRadius: 2,
          py: 5,
          visibility: { xs: "hidden", sm: "visible" },
        }}
        square
      >
        <Container
          sx={{
            visibility: "visible",
            px: 3,
          }}
        >
          <AboveComponent />
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
            sx={{ my: 3 }}
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
            showPassword={isShowPassword}
            onShowAndHide={() => setShowPassword((prev) => !prev)}
          />
          <LowerComponent loading={isSubmitting} submitError={submitError} />
        </Container>
      </Paper>
    </Container>
  );
};

export default LoginFormComponent;
