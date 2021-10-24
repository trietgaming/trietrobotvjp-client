import './Account.css'
import { useAuth } from '../../contexts/AuthContext';
// eslint-disable-next-line
import { useEffect, useState } from 'react';
import UsernameModal from './UsernameModal';

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
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState('');
  let [success, setSuccess] = useState(false);
  useEffect(() => document.title = "Cài đặt tài khoản - TrietRoBotVjp", [])

  const { logout, currentUser, updateUserProfile } = useAuth();

  async function logOut () {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  }

  function FilledUsernameModal() {
    return (<UsernameModal data={
      {username: username,
      changeUsername: changeUsername,
      loading: loading,
      handleUsernameChange: handleUsernameChange,
      error: error,
      success: success}
    }/>)
  }
  function rerenderUserModal() {
    setModal(modal = <FilledUsernameModal/>)
  }
  let [modal, setModal] = useState(<PseudoModal/>);

  async function changeUsername() {
    setError(error = '');
    if (username.length < 5) {
      setError(error = 'Vui lòng nhập tên người dùng dài trên 5 ký tự!');
      return rerenderUserModal();
    } else if (username.length > 16) {
      setError(error = 'Vui lòng nhập tên người dùng dài dưới 16 ký tự!');
      return rerenderUserModal();
    };
    setLoading(loading = true);
    try {
      await updateUserProfile({displayName: username});
      setSuccess(success = true);
      rerenderUserModal();
    } catch (err) {
      setError(error = err.message);
    } finally {
      setLoading(loading = false);
      rerenderUserModal()
    }
  }

  function handleUsernameChange(e) {
    setUsername(username = e.target.value);
    rerenderUserModal()
  }

  function handleChange(target) {
    switch (target) {
      case 'username':
        return rerenderUserModal();
    }
  }

  console.log(currentUser);

  function hideEmail() {
    let mail = currentUser.email.split('@');
    return '•'.repeat(mail[0].length) + '@' + mail[1];
  }

  return (
    <div>
      <div className="d-flex align-items-start main-account-div">
        <div className="nav flex-column me-3 left-account-tab" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <img alt="avatar" id="avatar" className="mx-auto" src='default-avatar.jpg'></img>
          <h4 className="mx-auto mt-3">{currentUser.displayName}</h4>
          <hr/>
          <button className="account-tab btn btn-danger" type="button" onClick={logOut}>Đăng xuất</button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane show active">
              <h2 className="text-center mb-5">Thông tin cơ bản</h2>
              <div className="mb-3 row">
                <label htmlFor="uid" className="col-sm-2 col-form-label">ID: </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control bg-dark text-light border-dark" id="uid" disabled value={currentUser.uid}/>
                </div>
                <label htmlFor="username" className="col-sm-2 col-form-label mt-3">Tên:</label>
                <div className="col-sm-10 mt-3">
                  <div className="input-group">
                    <input type="text" className="form-control bg-dark text-light border-dark" id="username" disabled value={currentUser.displayName}/>
                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handleChange('username')}>
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>
                <label htmlFor="email" className="col-sm-2 col-form-label mt-3">Email:</label>
                <div className={`col-sm-10 mt-3`}>
                  <div className="input-group">
                    <input type="text" className="form-control bg-dark text-light border-dark" id="email" disabled value={hideEmail()}/>
                    {!currentUser.emailVerified &&
                      <button type="button" className="btn btn-primary">
                        Xác thực email
                      </button>
                    }
                  </div>
                </div>
              </div>
          </div>

        </div>
      </div>
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          {modal}
      </div>
    </div>
  )
}

export default Account;
