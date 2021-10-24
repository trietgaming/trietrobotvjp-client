import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './form.css';
import { DISCORD_OAUTH2_URL } from '../../config.json';
import { Link } from 'react-router-dom';

function Login() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState('');
  const { login } = useAuth();

  useEffect(() => document.title = "Đăng nhập - TrietRoBotVjp", [])

  async function submit(e) {
    setLoading(loading = !loading);
    e.preventDefault();
    if (!email || !password) {
      setLoading(loading = !loading);
      if (!email && !password) setError(error = 'Vui lòng nhập thông tin đăng nhập!');
      else if (!password) setError(error = 'Bạn chưa nhập mật khẩu!');
      else setError(error = 'Bạn chưa nhập email!');
      return;
    };
    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(loading = !loading);
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleFacebookLogin() {
    window.FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        window.FB.api('/me', { fields: 'name, email, id' }, (response) => {

        });
      } else {
        window.FB.login((response) => {

        }, {scope: 'public_profile,email'});
      }
    });
  }

  return (
    <div id="account-form">
    <Link to='/' className="btn" style={{color: "white"}}><i className="fas fa-sign-out-alt"></i> Trang chủ</ Link>
    <div id="logreg-forms">
    <form className="form-signin" onSubmit={submit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Đăng nhập</h1>
      <div className="social-login text-center">
        <button className="btn facebook-btn social-btn" onClick={handleFacebookLogin}><i className="fab fa-facebook"></i><span> Đăng nhập bằng Facebook</span> </button>
          <button className="btn google-btn social-btn" type="button" onClick={()=>window.location.assign(DISCORD_OAUTH2_URL)}><i className="fab fa-discord"></i><span> Đăng nhập bằng Discord</span> </button>
      </div>
      <p className="text-center">Hoặc</p>
      <label className="input-label" htmlFor="user-email">Email</label>
      <input type="email" id="user-email" className="form-control text-light bg-dark border border-dark" placeholder="Nhập vào email của bạn" onChange={handleEmailChange} value = {email}/>
      <label className="input-label" htmlFor="user-password">Mật khẩu</label>
      <input type="password"  id='user-password' className="form-control text-light bg-dark border border-dark" placeholder="Nhập vào mật khẩu của bạn" onChange={handlePasswordChange} value = {password}/>
      <div className="text-center">
        <button className={`btn btn-success ${loading? 'disabled': ''}`} type="submit"><i className="fas fa-sign-in-alt"></i>{loading? ' Đang đăng nhập...': ' Đăng nhập'}</button>
      </div>
      <br/>
      {error &&
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      }
      <Link to="/forgot" id="forgot_pswd">Quên mật khẩu?</Link>
      <hr/>
      <div className="text-center">
        <Link to="/register" className="btn btn-secondary" type="button"><i className="fas fa-user-plus"></i> Đăng ký tài khoản mới</Link>
      </div>
      </form>
    </div>
  </div>
  )
}

export default Login;
