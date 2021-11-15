import LoginForm from "./components/LoginForm";
import Container from "@mui/material/Container";
import SmallNav from "../shared-components/SmallNav";

const Login = () => {
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
        <LoginForm />
      </Container>
    </>
  );
};

export default Login;
