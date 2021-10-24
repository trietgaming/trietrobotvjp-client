import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Login from '../components/authentication/Login';
import Register from '../components/authentication/Register';
import DefaultNavigation from '../components/navigation/DefaultNavigation.js';
import DefaultHome from '../components/home/DefaultHome';
import Footer from '../components/footer/Footer';
import NotFound from '../components/404/NotFound';
import ScrollToTop from '../components/ScrollToTop';

function DefaultApp() {
  return(
    <Router>
      <ScrollToTop></ScrollToTop>
      <Switch>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/register"><Register/></Route>
          <Route>
              <DefaultNavigation/>
            <Switch>
              <Route exact path="/"><DefaultHome/></Route>
              <Route path="/inventory"><Redirect to={{pathname:"/login"}}/></Route>
              <Route path="/account"><Redirect to={{pathname:"/login"}}/></Route>
              <Route><NotFound/></Route>
            </Switch>
              <Footer/>
          </Route>
      </Switch>
    </Router>
  )
}

export default DefaultApp;
