import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { AboveComponent, LowerComponent } from "./InputlessComponent";
import Box from "@mui/material/Box";

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
  return (
    <Container maxWidth="sm" sx={{ px: { xs: 0, sm: "initial" } }}>
      <Paper
        elevation={5}
        sx={{
          borderRadius: 2,
          py: 5,
          visibility: { xs: "hidden", sm: "visible" },
        }}
        square
      >
        <Container sx={{ visibility: "visible" }}>
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
          <TextField
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
          />
          <TextField
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
