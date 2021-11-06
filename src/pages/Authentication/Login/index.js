import LoginForm from "./components/LoginForm";
import { Grid } from "@mui/material";
import SmallNav from "../shared-components/SmallNav";

const Login = () => {
  return (
    <>
      <SmallNav />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: { xs: "95vh", md: "100vh" } }}
      >
        <LoginForm />
      </Grid>
    </>
  );
};

export default Login;
