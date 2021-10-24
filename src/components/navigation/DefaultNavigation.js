import './DefaultNavigation.css';
import { NavLink } from 'react-router-dom';

function DefaultNavigation() {
  return (
    <nav className='navbar-expand-xl fixed-top' id="default-navigation-bar">
      <ul className="navbar navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <img src="/favicon.svg" alt="" width="40" height="40" className="d-inline-block align-text-center"/>
          <span id= "brandname">TrietRoBotVjp</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav nav-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/discord"><i className="fab fa-discord"></i> TrietRoBotVjp Discord v2</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/messenger"><i className="fab fa-facebook-messenger"></i> TrietRoBotVjp Messenger</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to="/docs"><i className="fas fa-book-open"></i><span> Tài liệu</span></NavLink>
            </li>
          </div>

              <div className="navbar-nav account nav">
              <li className="nav-item">
                <NavLink className="nav-link btn btn-login" to="/login">Đăng nhập</NavLink>
              </li>
              <li className="nav-item" id="register-nav">
                <NavLink className="nav-link btn btn-register" to="/register" style={{backgroundColor: '#0984e3', padding: '0.5em 1em'}}>Đăng ký</NavLink>
              </li>
            </div>

          </div>
      </ul>
    </nav>
  )
}

export default DefaultNavigation;
