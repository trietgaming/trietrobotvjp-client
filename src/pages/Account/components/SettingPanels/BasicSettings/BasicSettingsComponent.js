import {
  Container,
  TextField,
  Box,
  Paper,
  Button,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import {
  JoinedDate,
  SocialLinkingComponent,
  IDAndEmailFields,
  PanelHeader,
  UserAvatarChanger,
} from "./InputlessComponent";

const BasicSettingsComponent = ({
  currentUser: { photoURL, uid, email, emailVerified, createdAt },
  hideEmail,
  handleSendVerificationEmail,
  verificationEmailSendingStatus: {
    isSent: isVerificationEmailSent,
    loading: isVerificationEmailSending,
    error: verifyEmailError,
  },
  handleSubmit,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
  resetForm,
}) => {
  return (
    <>
      {isVerificationEmailSent && (
        <Alert
          variant="filled"
          severity={verifyEmailError ? "error" : "info"}
          sx={{ mb: 3 }}
          iconMapping={{
            info: <EmailIcon fontSize="inherit" />,
          }}
        >
          {verifyEmailError ||
            `Chúng tôi đã gửi đường dẫn xác thực email đến ${hideEmail(
              email
            )}. Nếu không tìm thấy, hãy kiểm tra mục thư rác.`}
        </Alert>
      )}
      <Paper>
        <PanelHeader />
        <Container sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Box>
            <UserAvatarChanger {...{ photoURL }} />
          </Box>
          <Box sx={{ width: "100%", ml: 10 }}>
            <IDAndEmailFields
              {...{
                uid,
                email: hideEmail(email),
                emailVerified,
                isVerificationEmailSent,
                handleSendVerificationEmail,
                isVerificationEmailSending,
              }}
            />
          </Box>
        </Container>
        <Container>
          <TextField
            variant="filled"
            label="Tên người dùng"
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
            sx={{ width: "100%", mt: 6, mb: 3 }}
          />
        </Container>
        <SocialLinkingComponent />
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Container sx={{ display: "flex" }} disableGutters>
            <JoinedDate {...{ createdAt }} />
          </Container>
          <Container
            disableGutters
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button sx={{ mt: 3, mb: 4, mr: 2 }} onClick={resetForm}>
              Hủy
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="info"
              sx={{ mt: 3, mb: 4 }}
            >
              Lưu thay đổi
            </Button>
          </Container>
        </Container>
      </Paper>
    </>
  );
};

export default BasicSettingsComponent;
