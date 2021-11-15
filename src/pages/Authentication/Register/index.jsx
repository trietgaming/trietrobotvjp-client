import RegisterForm from "./components/RegisterForm";
import Container from "@mui/material/Container";
import SmallNav from "../shared-components/SmallNav";

const Register = () => {
  return (
    <>
      <SmallNav />
      <Container
        disableGutters
        sx={{
          display: "flex",
          height: "100%",
          flexShrink: 0,
          direction: {
            xs: "row",
            lg: "column",
          },
          alignItems: { xs: "initial", lg: "center" },
        }}
      >
        <RegisterForm />
      </Container>
    </>
  );
};

export default Register;
