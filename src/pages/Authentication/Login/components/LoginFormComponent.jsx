import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { LowerComponent, AboveComponent } from "./InputlessComponent";

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
  return (
    <Container
      maxWidth="xs"
      component="form"
      onSubmit={handleSubmit}
      sx={{ px: { xs: 0, sm: "initial" } }}
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
            px: {
              xs: 4,
              sm: 3,
            },
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
          <LowerComponent loading={isSubmitting} submitError={submitError} />
        </Container>
      </Paper>
    </Container>
  );
};

export default LoginFormComponent;
