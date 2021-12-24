import LoginForm from "./components/LoginForm";
import Container from "@mui/material/Container";
import SmallNav from "../shared-components/SmallNav";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CustomLogin from "./components/CustomLogin";

const MainLogin = () => {
  return (
    <>
      <SmallNav sx={{ positon: "relative" }} />
      <Container
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          flexDirection: "column",
          my: { xs: 0, sm: 6 },
        }}
      >
        <LoginForm />
      </Container>
    </>
  );
};

const Login = () => {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <Switch>
      <Route path={`${url}/`} exact component={MainLogin} />
      <Route path={`${url}/custom`} exact component={CustomLogin} />
    </Switch>
  );
};

export default Login;
