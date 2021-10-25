function UsernameModal (props) {
  const { username, changeUsername, loading, handleUsernameChange, error, success } = props.data;
  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content bg-dark">
        <div className="modal-header border-secondary">
          <h5 className="modal-title text-light" id="modalLabel">Đổi tên người dùng</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          {error ?
            <div className="alert alert-danger mb-3" role="alert">
              {error}
            </div>
            : success &&
            <div className="alert alert-success mb-3" role="alert">
              Đổi tên người dùng thành công!
            </div>
          }
          <label htmlFor="username-input">Nhập tên người dùng mới</label>
          <input className={`form-control bg-secondary mt-3 border-dark text-light ${(loading || success) && 'disabled'}`} onChange={handleUsernameChange} value={username}/>
        </div>
        <div className="modal-footer border-dark">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button type="button" className={`btn btn-${success || loading? 'success disabled': 'primary'}`} onClick={!success? changeUsername: undefined}>
            {loading? 'Đang lưu...': success?'Thành công': 'Lưu thay đổi'}
          </button>
        </div>
      </div>
    </div>

  )
}

export default UsernameModal;
