import {
  BrowserRouter as Router,
  Switch,
  Route as WithoutNavRoute,
  Redirect,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Navigation from "../global-components/Navigation";
import { useSelector } from "react-redux";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Authentication/Login"));
const Register = lazy(() => import("../pages/Authentication/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Loading = () => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <CircularProgress />
  </div>
);

const RedirectToHomePage = () => <Redirect to="/" />;

const Route = ({ path, component, exact }) => {
  const Component = component;
  return (
    <WithoutNavRoute path={path} exact={exact}>
      <Navigation />
      <Component />
    </WithoutNavRoute>
  );
};

const AppRouter = () => {
  console.log("rerender AppRouter");

  const authEventTriggered = useSelector(
    (state) => state.auth.authEventTriggered
  );

  const authenticated = useSelector((state) => state.auth.authenticated);

  //use const {a, b} = useSelector(state => state.object) will rerender unnecessary

  return authEventTriggered ? (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <WithoutNavRoute
            path="/login"
            component={authenticated ? RedirectToHomePage : Login}
          />
          <WithoutNavRoute
            path="/register"
            component={authenticated ? RedirectToHomePage : Register}
          />
          <WithoutNavRoute>
            <Switch>
              <Route path="/" exact component={Home} />
              <WithoutNavRoute component={NotFound} />
            </Switch>
          </WithoutNavRoute>
        </Switch>
      </Router>
    </Suspense>
  ) : (
    <Loading />
  );
};

export default AppRouter;
