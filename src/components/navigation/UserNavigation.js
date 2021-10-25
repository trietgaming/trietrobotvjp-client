import './UserNavigation.css';
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

function UserNavigation({ user }) {
  const { logout, currentUser } = useAuth();
  const [width, setWidth] = useState(window.innerWidth);
  const iconSize = `${width < 455? 'fa-md': 'fa-lg'}`;
  const username = currentUser.displayName;

  async function logOut () {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar-expand fixed-top" role="navigation" id="navigation-bar">
      <div className="navbar navbar-dark bg-dark container-fluid">
        <Link className="navbar-brand logo me-auto order-0" to="/">
          <img src="/favicon.svg" alt="" width="40" height="40" className="d-inline-block align-text-center"/>
          <span id= "brandname">TrietRoBotVjp</span>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav nav-center">
            <li className="nav-item text-center" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Hướng dẫn">
              <NavLink className="nav-link" to="/docs" id="docs"><i className={`fas fa-book-open ${iconSize}`}></i></NavLink>
            </li>
            <li className="nav-item text-center" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Trò chơi">
              <NavLink className="nav-link" to="/games" id="games"><i className={`fas fa-gamepad ${iconSize}`}></i></NavLink>
            </li>
            <li className="nav-item text-center" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Kinh tế">
              <NavLink className="nav-link" to="/balance" id="balance"><i className={`fas fa-coins ${iconSize}`}></i></NavLink>
            </li>
            <li className="nav-item text-center" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Kho đồ">
              <NavLink className="nav-link" to="/inventory" id="inventory"><i className={`fas fa-archive ${iconSize}`}></i></NavLink>
            </li>
            <li className="nav-item text-center" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cửa hàng">
              <NavLink className="nav-link" to="/shop" id="shop"><i className={`fas fa-store ${iconSize}`}></i></NavLink>
            </li>
          </ul>
          <div className="ms-auto order-3">
            <div className="nav-item dropdown">
              <button className={`btn btn-dark btn-${width <= 337? 'sm': 'lg'}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span id="username-nav">{
                    username && width<=1024 && username.includes(' ')?
                      username.split(' ').reverse()[0]
                    : width<=1024 && username && username.length <=8?
                      username
                      : width<=1024? '': username && username}</span>
                <img src={`${currentUser.photoURL || 'default-avatar.jpg'}`} alt="" width="40" height="40" className="d-inline-block align-text-center user-avatar"/>
          	  </button>
              <ul className="dropdown-menu dropdown-menu-right bg-dark dropdown-menu-dark" aria-labelledby="dropdownMenuButton1" style={{right: 0, left: 'auto', width: '100%'}}>

                <li><Link className="dropdown-item" to="/account">Cài đặt</Link></li>
                <hr/>
            		<li><button className="dropdown-item" onClick={logOut}>Đăng xuất</button></li>
          	  </ul>
            </div>
          </div>
          </div>
      </div>
    </nav>
  )
}
export default UserNavigation;
