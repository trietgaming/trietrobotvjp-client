const authErrors = {
  default: "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
  "auth/email-already-in-use": "Email đã được sử dụng. Vui lòng dùng email khác.",
  "auth/invalid-email": "Email không hợp lệ!",
  "auth/weak-password": "Mật khẩu đã nhập quá yếu!",
  "auth/wrong-password": "Sai mật khẩu!",
  "auth/user-not-found": "Email không tồn tại!",
  "auth/too-many-requests": "Bạn đang gửi quá nhiều yêu cầu. Vui lòng thử lại sau vài phút.",
  "auth/credential-already-in-use": "Tài khoản mạng xã hội của bạn đã được liên kết với một tài khoản khác!",
}

export default (errCode) => {
  console.log(errCode);
  return authErrors[errCode] || authErrors.default;
}