import { TextField, Container, Paper } from "@mui/material";
import { LowerComponent, AboveComponent } from "./InputlessComponent";

const LoginFormComponent = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  handleSubmit,
  status,
}) => {
  const { loading, error: submitError } = status;

  return (
    <Container maxWidth="xs" component="form" onSubmit={handleSubmit}>
      <Paper elevation={5} sx={{ px: 2, borderRadius: 2, py: 5 }} square>
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
        />
        <LowerComponent loading={loading} submitError={submitError} />
      </Paper>
    </Container>
  );
};

export default LoginFormComponent;
