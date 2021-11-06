import RegisterForm from "./components/RegisterForm";
import { Grid } from "@mui/material";
import SmallNav from "../shared-components/SmallNav";

const Register = () => {
  return (
    <>
      <SmallNav />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <RegisterForm />
      </Grid>
    </>
  );
};

export default Register;
