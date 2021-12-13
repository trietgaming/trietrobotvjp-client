import RegisterForm from "./components/RegisterForm";
import Container from "@mui/material/Container";
import SmallNav from "../shared-components/SmallNav";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SocialRegister from "./components/SocialRegister";

const MainRegister = () => {
  return (
    <>
      <SmallNav />
      <Container
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <RegisterForm />
      </Container>
    </>
  );
};

const Register = () => {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <Switch>
      <Route path={`${url}/`} exact component={MainRegister} />
      <Route path={`${url}/social`} exact component={SocialRegister} />
    </Switch>
  );
};

export default Register;
