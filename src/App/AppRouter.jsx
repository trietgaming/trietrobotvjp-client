import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useLocation } from "react-router";
import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import Navigation from "../global-components/Navigation";
import CenteredLoading from "../global-components/CenteredLoading";

const NotFound = lazy(() => import("../pages/NotFound"));
const Games = lazy(() => import("../pages/Games"));
const Help = lazy(() => import("../pages/Help"));
const Inventory = lazy(() => import("../pages/Inventory"));
const Balance = lazy(() => import("../pages/Balance"));
const Shop = lazy(() => import("../pages/Shop"));
const Home = lazy(() => import("../pages/Home"));
const Account = lazy(() => import("../pages/Account"));
const ForgotPassword = lazy(() =>
  import("../pages/Authentication/ForgotPassword")
);

const Login = lazy(() => import("../pages/Authentication/Login"));
const Register = lazy(() => import("../pages/Authentication/Register"));

const RedirectToHomePage = () => <Redirect to="/" />;

const AppRoute = ({ path, component, exact, withoutNav }) => {
  const Component = component;

  return (
    <Route path={path} exact={exact}>
      <>
        {!withoutNav && <Navigation />}
        <Suspense fallback={<CenteredLoading />}>
          <Component />
        </Suspense>
      </>
    </Route>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const AppRouter = () => {
  console.log("rerender AppRouter");

  const isAuthEventTriggered = useSelector(
    (state) => state.auth.isAuthEventTriggered
  );

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  //use const {a, b} = useSelector(state => state.object) will rerender unnecessary

  return isAuthEventTriggered ? (
    <Router>
      <ScrollToTop />
      <Switch>
        <AppRoute
          path={["/login", "/signin"]}
          component={isAuthenticated ? RedirectToHomePage : Login}
          withoutNav
        />
        <AppRoute
          path={["/register", "/signup"]}
          component={isAuthenticated ? RedirectToHomePage : Register}
          withoutNav
        />
        <AppRoute
          path="/forgot-password"
          component={isAuthenticated ? RedirectToHomePage : ForgotPassword}
          withoutNav
        />
        <Route>
          <Switch>
            <AppRoute path="/" exact component={Home} />
            <AppRoute path="/help" component={Help} />
            <AppRoute path="/games" component={Games} />
            <AppRoute path="/balance" component={Balance} />
            <AppRoute path="/inventory" component={Inventory} />
            <AppRoute path="/shop" component={Shop} />
            <AppRoute
              path="/account"
              component={isAuthenticated ? Account : RedirectToHomePage}
            />
            <AppRoute component={NotFound} withoutNav />
          </Switch>
        </Route>
      </Switch>
    </Router>
  ) : (
    <CenteredLoading message="Đang xác thực..." logo={true} />
  );
};

export default AppRouter;
