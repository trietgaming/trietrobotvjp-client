import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { RouteProps, useLocation } from "react-router";
import { lazy, ReactNode, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import Navigation from "../global-components/Navigation";
import CenteredLoading from "../global-components/CenteredLoading";
import { RootStateType } from "@appStore";

const NotFound = lazy(() => import("../pages/NotFound"));
const Games = lazy(() => import("../pages/Games"));
const Help = lazy(() => import("../pages/Help"));
const Inventory = lazy(() => import("../pages/Inventory"));
const Balance = lazy(() => import("../pages/Balance"));
const Shop = lazy(() => import("../pages/Shop"));
const Home = lazy(() => import("../pages/Home"));
const Account = lazy(() => import("../pages/Account"));
const ForgotPassword = lazy(
  () => import("../pages/Authentication/ForgotPassword")
);

const Login = lazy(() => import("../pages/Authentication/Login"));
const Register = lazy(() => import("../pages/Authentication/Register"));

const RedirectToHomePage = () => <Redirect to="/" />;
const RedirectToLoginPage = () => <Redirect to="/login" />;

interface AppRouteProps {
  withoutNav?: boolean;
  path?: RouteProps["path"];
  exact?: RouteProps["exact"];
  children?: ReactNode;
}

const AppRoute = ({ path, children, exact, withoutNav }: AppRouteProps) => {
  return (
    <Route path={path} exact={exact}>
      <>
        {!withoutNav && <Navigation />}
        <Suspense fallback={<CenteredLoading />}>{children}</Suspense>
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
    (state: RootStateType) => state.auth.isAuthEventTriggered
  );

  const isAuthenticated = useSelector(
    (state: RootStateType) => state.auth.isAuthenticated
  );

  //use const {a, b} = useSelector(state => state.object) will rerender unnecessary

  return isAuthEventTriggered ? (
    <Router>
      <ScrollToTop />
      <Switch>
        <AppRoute path={["/login", "/signin"]} withoutNav>
          {isAuthenticated ? <RedirectToHomePage /> : <Login />}
        </AppRoute>
        <AppRoute path={["/register", "/signup"]} withoutNav>
          {isAuthenticated ? <RedirectToHomePage /> : <Register />}
        </AppRoute>
        <AppRoute path="/forgot-password" withoutNav>
          {isAuthenticated ? <RedirectToHomePage /> : <ForgotPassword />}
        </AppRoute>
        <Route>
          <Switch>
            <AppRoute path="/" exact>
              {<Home />}
            </AppRoute>
            <AppRoute path="/help">{<Help />}</AppRoute>
            <AppRoute path="/games">{<Games />}</AppRoute>
            <AppRoute path="/balance">
              {isAuthenticated ? <Balance /> : <RedirectToLoginPage />}
            </AppRoute>
            <AppRoute path="/inventory">
              {isAuthenticated ? <Inventory /> : <RedirectToLoginPage />}
            </AppRoute>
            <AppRoute path="/shop">
              <Shop />
            </AppRoute>
            <AppRoute path="/account">
              {isAuthenticated ? <Account /> : <RedirectToLoginPage />}
            </AppRoute>
            <AppRoute withoutNav>
              <NotFound />
            </AppRoute>
          </Switch>
        </Route>
      </Switch>
    </Router>
  ) : (
    <CenteredLoading message="Đang xác thực..." logo={true} />
  );
};

export default AppRouter;
