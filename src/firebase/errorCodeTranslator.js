const authErrors = {
  default: "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
  "auth/email-already-in-use":
    "Email đã được sử dụng. Vui lòng dùng email khác.",
  "auth/email-already-exists": "Email đã tồn tại, vui lòng dùng email khác.",
  "auth/invalid-email": "Email không hợp lệ!",
  "auth/weak-password": "Mật khẩu đã nhập quá yếu!",
  "auth/wrong-password": "Sai mật khẩu!",
  "auth/user-not-found": "Email không tồn tại!",
  "auth/too-many-requests":
    "Bạn đang gửi quá nhiều yêu cầu. Vui lòng thử lại sau vài phút.",
  "auth/credential-already-in-use":
    "Tài khoản mạng xã hội của bạn đã được liên kết với một tài khoản khác!",
  "jwt/invalid":
    "Phiên xác thực đã hết hạn hoặc không hợp lệ. Vui lòng thử lại sau",
  "auth/invalid-custom-token": "Mã xác thực không hợp lệ!",
};

export default (errCode) => {
  console.log(errCode);
  return authErrors[errCode] || authErrors.default;
};
