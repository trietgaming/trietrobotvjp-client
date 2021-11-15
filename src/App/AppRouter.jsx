import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Navigation from "../global-components/Navigation";

import NotFound from "../pages/NotFound";
import Games from "../pages/Games";
import Help from "../pages/Help";
import Inventory from "../pages/Inventory";
import Balance from "../pages/Balance";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import Account from "../pages/Account";

const Login = lazy(() => import("../pages/Authentication/Login"));
const Register = lazy(() => import("../pages/Authentication/Register"));

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

const AppRouter = () => {
  console.log("rerender AppRouter");

  const isAuthEventTriggered = useSelector(
    (state) => state.auth.isAuthEventTriggered
  );

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  //use const {a, b} = useSelector(state => state.object) will rerender unnecessary

  return isAuthEventTriggered ? (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route
            path="/login"
            component={isAuthenticated ? RedirectToHomePage : Login}
          />
          <Route
            path="/register"
            component={isAuthenticated ? RedirectToHomePage : Register}
          />
          <Route>
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/help" component={Help} />
              <Route path="/games" component={Games} />
              <Route path="/balance" component={Balance} />
              <Route path="/inventory" component={Inventory} />
              <Route path="/shop" component={Shop} />
              <Route
                path="/account"
                component={isAuthenticated ? Account : RedirectToHomePage}
              />
              <Route component={NotFound} />
            </Switch>
          </Route>
        </Switch>
      </Router>
    </Suspense>
  ) : (
    <Loading />
  );
};

export default AppRouter;
