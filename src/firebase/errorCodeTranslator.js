const authErrors = {
  default: "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
  "auth/email-already-in-use": "Email đã được sử dụng. Vui lòng nhập email khác.",
  "auth/invalid-email": "Email không hợp lệ!",
  "auth/weak-password": "Mật khẩu đã nhập quá yếu!",
  "auth/wrong-password": "Sai mật khẩu!",
  "auth/user-not-found": "Email không tồn tại!",
  "auth/too-many-requests": "Bạn đang gửi quá nhiều yêu cầu. Vui lòng thử lại sau vài phút."
}

export default function getErrorTranslated(errCode) {
  return authErrors[errCode] || authErrors.default;
}