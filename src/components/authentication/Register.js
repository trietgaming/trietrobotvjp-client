import { useState, useEffect } from 'react';
import './form.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import getErrorTranslated from './errorCodeTranslated';


function Register() {
  const { register } = useAuth();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState('');
  let [username, setUsername] = useState('');

  useEffect(() => document.title = "Đăng ký - TrietRoBotVjp", [])

  async function submit(e) {
    setError(error = '');
    e.preventDefault();
    if (!email && !password && !username && !confirmPassword) return setError(error = 'Vui lòng nhập thông tin đăng ký!');
    else if (!email) return setError(error = 'Bạn chưa nhập email!');
    else if (!password) return setError(error = 'Bạn chưa nhập mật khẩu!');
    else if (!confirmPassword) return setError(error = 'Bạn chưa nhập lại mật khẩu!');
    else if (confirmPassword !== password) return setError(error = 'Mật khẩu nhập lại không khớp!');
    else if (username.length <= 5 || username.length > 20) return setError(error = 'Tên người dùng không hợp lệ!');
    setLoading(loading = true);
    try {
      await register(username, email, password);
    } catch (err) {
      setError(getErrorTranslated(err.code));
    }
    setLoading(loading = false);
  }

  function handleEmailChange(e) {
    setEmail(email = e.target.value);
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(confirmPassword = e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(password = e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(username = e.target.value + '');
  }

  return (
    <div id='account-form'>
    <Link to='/' className="btn" style={{color: "white"}}><i className="fas fa-sign-out-alt"></i> Trang chủ</Link>
    <div id="logreg-forms">
    <form className="form-signin" onSubmit={submit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Đăng ký</h1>
      <div className="social-login text-center">
          <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-square"></i> Đăng ký bằng Facebook</span> </button>
          <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-discord"></i> Đăng ký bằng Discord</span> </button>
      </div>
      <p className="text-center">Hoặc</p>
      <label className="input-label">Tên người dùng</label>
      <input type="name" className="form-control text-light bg-dark border border-dark" placeholder="Nhập tên người dùng" onChange={handleUsernameChange} value = {username}/>
      <label htmlFor="user-email" className="input-label">Email</label>
      <input type="email" id="user-email" className="form-control text-light bg-dark border border-dark" placeholder="Nhập email" onChange={handleEmailChange} value = {email}/>
      <label className="input-label">Mật khẩu</label>
      <input type="password" className="form-control text-light bg-dark border border-dark" placeholder="Nhập mật khẩu" onChange={handlePasswordChange} value = {password}/>
      <input type="password" className="form-control text-light bg-dark border border-dark" placeholder="Nhập lại mật khẩu" onChange={handleConfirmPasswordChange} value = {confirmPassword}/>
      <div className="text-center">
        <button className={`btn btn-success ${loading && 'disabled'}`} type="submit">{loading? <div id="loading-spinner"></div>: <i className="fas fa-user-plus"></i>}{loading? ' Đang tạo...': ' Tạo tài khoản'}</button>
      </div>
      <br/>
        {error &&
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        }
          <p class="text-muted">Mật khẩu phải dài từ 8-16 ký tự.</p>
      <hr/>
      <div className="text-center">
        <Link to="/login" className="btn btn-secondary" type="button"><i className="fas fa-sign-in-alt"></i> Đăng nhập</Link>
      </div>
      </form>
    </div>
  </div>
  )

}

export default Register;
