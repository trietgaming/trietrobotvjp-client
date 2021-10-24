import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Account from '../components/account/Account';
import UserNavigation from '../components/navigation/UserNavigation';
import DefaultHome from '../components/home/DefaultHome';
import Footer from '../components/footer/Footer';
import NotFound from '../components/404/NotFound';
import ScrollToTop from '../components/ScrollToTop';

function UserApp() {
  return(
    <Router>
      <ScrollToTop></ScrollToTop>
      <Switch>
          <Route exact path="/login"><Redirect to={{pathname:"/"}}/></Route>
          <Route exact path="/register"><Redirect to={{pathname:"/"}}/></Route>
          <Route>
              <UserNavigation/>
            <Switch>
              <Route exact path="/"><DefaultHome/></Route>
              <Route path="/inventory"><div>INVENTORY</div></Route>
              <Route path="/account"><Account/></Route>
              <Route><NotFound/></Route>
            </Switch>
              <Footer/>
          </Route>
      </Switch>
    </Router>
  )
}

export default UserApp;
