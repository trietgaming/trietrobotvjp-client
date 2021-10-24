import { useState, useEffect } from 'react';
import './form.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

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
    setLoading(loading = !loading);
    setError(error = '');
    e.preventDefault();
    if (!email || !password || !username || !confirmPassword || confirmPassword !== password) {
      setLoading(loading = !loading);
      if (!email && !password && !username && !confirmPassword) setError(error = 'Vui lòng nhập thông tin đăng ký!');
      else if (!email) setError(error = 'Bạn chưa nhập email!');
      else if (!password) setError(error = 'Bạn chưa nhập mật khẩu!');
      else if (!confirmPassword) setError(error = 'Bạn chưa nhập lại mật khẩu!');
      else if (confirmPassword !== password) setError(error = 'Mật khẩu nhập lại không khớp!');
      else setError(error = 'Bạn chưa nhập tên người dùng!');
      return;
    };
    try {
      await register(username, email, password);
    } catch (err) {
      setError(err.message);
    }
    setLoading(loading = !loading);
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
    setUsername(username = e.target.value);
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
      <input type="name" className="form-control text-light bg-dark border border-dark" placeholder="Nhập tên người dùng" onChange={handleUsernameChange} value = {username}/>
      <br/>
      <input type="email" id="user-email" className="form-control text-light bg-dark border border-dark" placeholder="Nhập email" onChange={handleEmailChange} value = {email}/>
      <input type="password" className="form-control text-light bg-dark border border-dark" placeholder="Nhập mật khẩu" onChange={handlePasswordChange} value = {password}/>
      <input type="password" className="form-control text-light bg-dark border border-dark" placeholder="Nhập lại mật khẩu" onChange={handleConfirmPasswordChange} value = {confirmPassword}/>
      <div className="text-center">
        <button className="btn btn-success" type="submit"><i className="fas fa-user-plus"></i>{loading? ' Đang tạo...': ' Tạo tài khoản'}</button>
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
