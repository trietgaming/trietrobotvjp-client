import { Link } from 'react-router-dom';
import { useState } from 'react';
import { linkWithCredential } from '@firebase/auth';
import getErrorTranslated from './errorCodeTranslated';

function AskForPassword(props) {
    const { provider, email, credential, login } = props.data;
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);


    async function submit (e) {
        e.preventDefault();
        setError('');
        if (!password) return setError('Bạn chưa nhập mật khẩu');
        setLoading(loading = true);

        try {
            const result = await login(email, password);
            linkWithCredential(result.user, credential);
        } catch (err) {
            setError(getErrorTranslated(err.code));
        } finally {
            setLoading(loading = false)
        }
    }

    function handlePasswordChange(e) {
        setPassword(password = e.target.value);
    }

    return (
    <div id="account-form">
    <Link to='/' className="btn" style={{color: "white"}}><i className="fas fa-sign-out-alt"></i> Trang chủ</ Link>
        <div id="logreg-forms">
            <form className="form-signin" onSubmit={submit}>
                <h1 className="h3 mb-3 font-weight-normal text-center">Liên kết tài khoản</h1>
                <p>{`Bạn chưa liên kết tài khoản ${provider}. Hãy nhập mật khẩu của bạn để liên kết tài khoản và đăng nhập cho những lần sau.`}</p>
                <label>Email</label>
                <input type="email" className="form-control bg-dark border border-dark readonly text-muted" readOnly value = {email}/>
                <label className="input-label" htmlFor="user-password">Mật khẩu</label>
                <input type="password"  id='user-password' className="form-control text-light bg-dark border border-dark" placeholder="Nhập vào mật khẩu của bạn" onChange={handlePasswordChange} value = {password}/>
                <div className="text-center">
                    <button 
                    className={`btn btn-success ${loading? 'disabled': ''}`} 
                    type="submit">
                        {loading? <div id="loading-spinner"></div>:<i className="fas fa-sign-in-alt"></i>}{loading? ' Đang đăng nhập...': ' Liên kết & Đăng nhập'}
                    </button>
                </div>
                <br/>
                {error &&
                    <div className="alert alert-danger" role="alert">
                    {error}
                    </div>
                }
                <Link to="/forgot" id="forgot_pswd">Quên mật khẩu?</Link>
            </form>
        </div>
    </div>
    )
}

export default AskForPassword;