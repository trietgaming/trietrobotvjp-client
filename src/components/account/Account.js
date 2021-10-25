import './Account.css'
import { useAuth } from '../../contexts/AuthContext';
// eslint-disable-next-line
import { useEffect, useState } from 'react';
import UsernameModal from './UsernameModal';
import getErrorTranslated from '../authentication/errorCodeTranslated';

function PseudoModal() {
  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content bg-dark">
        <div className="modal-header border-secondary">
          <h5 className="modal-title text-light" id="modalLabel">Modal</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          Body
        </div>
        <div className="modal-footer border-dark">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button type="button" className="btn btn-primary">'Lưu thay đổi'</button>
        </div>
      </div>
    </div>
  )
}

function Account() {
  let [username, setUsername] = useState('');
  let [usernameLoading, setUsernameLoading] = useState(false);
  let [error, setError] = useState('');
  let [usernameSuccess, setUsernameSuccess] = useState(false);
  let [modal, setModal] = useState(<PseudoModal/>);
  let [verifyMessage, setVerifyMessage] = useState('');
  let [verifyEmailLoading, setVerifyEmailLoading] = useState(false);
  let [showEmail, setShowEmail] = useState(false);
  let [linkError, setLinkError] = useState('');
  let [width, setWidth] = useState(window.innerWidth);

  const { logout, currentUser, updateUserProfile, verifyEmail, linkFacebookAccount } = useAuth();

  let [facebookUsername] = useState(
      currentUser.providerData
      .find(provider => provider.providerId === 'facebook.com')
      ?.displayName
    );

  async function linkFacebook() {
    try {
      await linkFacebookAccount();
    } catch (err) {
      if (err.code === "auth/credential-already-in-use") {
        setLinkError(linkError =>{ 
          document.getElementById('error-displayer').click();
          return "Tài khoản mạng xã hội của bạn đã được liên kết với một tài khoản khác!"
        })
      }
    }
    
  }

  async function handleVerifyEmail() {
    setVerifyEmailLoading(verifyEmailLoading = true);
    try {
      await verifyEmail()
      setVerifyMessage('Chúng tôi đã gửi đường dẫn xác thực email đến hộp thư của bạn. Nếu không tìm thấy, hãy kiểm tra mục thư rác.');
    } catch (err) {
      setVerifyMessage(verifyMessage = getErrorTranslated(err.code))
    } finally {
      setVerifyEmailLoading(verifyEmailLoading = false);
    }
  }

  function FilledUsernameModal() {
    return (<UsernameModal data={{
      username: username,
      changeUsername: changeUsername,
      loading: usernameLoading,
      handleUsernameChange: handleUsernameChange,
      error: error,
      success: usernameSuccess
    }
    }/>)
  }

  useEffect(() => {
    document.title = "Cài đặt tài khoản - TrietRoBotVjp";
    const handleResize = () => setWidth(width => window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  useEffect(() => setModal(modal => <FilledUsernameModal/>)
  , [usernameLoading, error, usernameSuccess])

  async function logOut () {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  }


  async function changeUsername() {
    setError(error = '');
    if (username.length <= 5) {
      return setError(error = 'Vui lòng nhập tên người dùng dài trên 5 ký tự!');
    } else if (username.length > 20) {
      return setError(error = 'Vui lòng nhập tên người dùng dài không quá 20 ký tự!');
    };
    setUsernameLoading(usernameLoading = true);
    try {
      await updateUserProfile({displayName: username});
      setUsernameSuccess(usernameSuccess = true);
    } catch (err) {
      setError(error = err.message);
    } finally {
      setUsernameLoading(usernameLoading = false);
    }
  }

  function handleUsernameChange(e) {
    setUsername(username = e.target.value);
    setModal(modal = <FilledUsernameModal/>);
  }

  function handleChange(target) {
    switch (target) {
      case 'username':
        return setModal(modal => <FilledUsernameModal/>);
      default:
        return false;
    }
  }

  console.log(currentUser);

  function hideEmail() {
    let mail = currentUser.email.split('@');
    return '•'.repeat(mail[0].length) + '@' + mail[1];
  }

  return (
    <div>
      <div className="d-flex align-items-start" id="main-account-div">
        <div className="nav flex-column left-account-tab" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <img alt="avatar" id="avatar" className="mx-auto" src={`${currentUser.photoURL || 'default-avatar.jpg'}`}></img>
          <h4 className="mx-auto mt-3">{currentUser.displayName}</h4>
          <hr/>
          <button className="account-tab btn btn-danger" type="button" onClick={logOut}>Đăng xuất</button>
          <button className="account-tab btn btn-primary" type="button">Đổi mật khẩu</button>
          <button className="account-tab btn btn-warning" type="button">Thay đổi email</button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className={`tab-pane show active ${(verifyMessage && width <= 768) && 'h-100'}`}>
              <h2 className="text-center mb-5">Thông tin cơ bản</h2>
              <div className="mb-3 row">
                <label htmlFor="uid" className="col-sm-2 col-form-label">ID: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control bg-dark text-light border-dark" id="uid" disabled value={currentUser.uid}/>
                </div>
                <label htmlFor="username" className="col-sm-2 col-form-label mt-3">Tên:</label>
                <div className="col-lg-10 mt-3">
                  <div className="input-group">
                    <input type="text" className="form-control bg-dark text-light border-dark" id="username" disabled value={currentUser.displayName}/>
                    <button type="button" className="btn btn-dark shadow-none" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handleChange('username')}>
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>
                <label htmlFor="email" className="col-sm-2 col-form-label mt-3">Email:</label>
                <div className='col-lg-10 mt-3'>
                  <div className="input-group">
                    <input type="text" className="form-control bg-dark text-light border-dark" id="email" disabled value={showEmail? currentUser.email:hideEmail()}/>
                    <button type="button" className='btn btn-dark shadow-none' onClick={() => setShowEmail(showEmail = !showEmail)}>
                      {showEmail? <i className="fas fa-eye"/>: <i className="fas fa-eye-slash"></i>}
                    </button>
                    {currentUser.emailVerified ?
                      <button type="button" className='btn btn-success shadow-none' data-bs-toggle="tooltip" data-bs-placement="top" title="Email đã được xác thực.">
                        <i className="fas fa-user-check"/>
                      </button>
                      :<button type="button" 
                        className={`btn btn-${verifyEmailLoading? 'secondary' : verifyMessage? 'success' :'primary'} ${(verifyMessage || verifyEmailLoading) && 'disabled'}`} 
                        onClick={(!verifyEmailLoading && !verifyMessage)? handleVerifyEmail: undefined}
                        >
                          {`${verifyMessage? 'Đã gửi xác thực': verifyEmailLoading? "Đang gửi..." :'Xác thực'}`}
                      </button>
                    }
                  </div>
                </div>
                {verifyMessage && <div className={`col-sm-10 mt-3`}>
                  {verifyMessage}
                </div>}
                <hr className="mt-3"/>
                <label className="col-sm-2 col-form-label mt-3">Discord: </label>
                <div className='col-lg-10 mt-3'>
                  <button type="button" className="btn text-light w-100" style={{backgroundColor: "#5865F2"}}>
                    <i className="fab fa-discord"></i> Liên kết với Discord
                  </button>
                </div>
                <label className="col-sm-2 col-form-label mt-3">Facebook: </label>
                <div className='col-lg-10 mt-3'>
                  <button type="button" className="btn text-light w-100" disabled={Boolean(facebookUsername)} style={{backgroundColor: "#3C589C"}} onClick={linkFacebook}>
                    <i className="fab fa-facebook"></i> {facebookUsername? facebookUsername: 'Liên kết với Facebook'}
                  </button>
                </div>
              </div>
          </div>

        </div>
      </div>
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          {modal}
      </div>


    <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#linkErrorModal" id="error-displayer">
      Toggle the Link error.
    </button>
    
    <div className="modal fade" id="linkErrorModal" tabindex="-1" aria-labelledby="linkErrorModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-danger border-dark">
            <h5 className="modal-title text-light" id="linkErrorModalLabel">Lỗi liên kết tài khoản</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body bg-dark">
            {linkError}
          </div>
          <div className="modal-footer bg-dark border-dark">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Đóng</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Account;
