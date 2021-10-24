import './NotFound.css';
import { useEffect } from 'react';

function NotFound() {
  useEffect(() => document.title = "Không tìm thấy trang - TrietRoBotVjp", [])
  return (
    <div id="notfound">
      <div className="notfound text-center">
      <div className="notfound-404">
        <h1>404</h1>
      </div>
      <h2>Không tìm thấy trang</h2>
      <p>Trang bạn đang muốn tìm có vẻ như không tồn tại, hoặc đã bị xóa nhưng cũng có thể là tạm thời không truy cập được.</p>
      <button to='/' className='btn btn-primary btn-lg' style={{padding: '0.5em 2em'}} onClick={() => window.history.back()}>Quay lại</button>
      </div>
    </div>
  )
}

export default NotFound;
