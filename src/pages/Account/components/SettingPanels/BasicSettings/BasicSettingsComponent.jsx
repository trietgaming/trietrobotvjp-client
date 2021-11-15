import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import {
  JoinedDate,
  SocialLinkingComponent,
  PanelHeader,
} from "./InputlessComponent";
import IDAndEmailFields from "./IDAndEmailFields";
import UserAvatarChanger from "./UserAvatarChanger";

const BasicSettingsComponent = ({
  currentUser: {
    photoURL,
    metadata: { createdAt },
    providerData,
  },
  handleSubmit,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
  resetForm,
  handleResetForm,
  isSubmitting,
  dirty,
  isValid,
  handleLinkFBAccount,
  setFieldValue,
  fileInputField,
}) => {
  console.log("dirty: ", dirty);
  console.log("isvalid: ", isValid);
  console.log(errors);
  return (
    <Paper>
      <PanelHeader />
      <Container sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Box>
          <UserAvatarChanger
            {...{
              photoURL,
              setFieldValue,
              selectedFile: values.selectedFile,
              fileInputField,
            }}
          />
        </Box>
        <Box sx={{ width: "100%", ml: 10 }}>
          <IDAndEmailFields />
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
      <SocialLinkingComponent {...{ handleLinkFBAccount, providerData }} />
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Container sx={{ display: "flex" }} disableGutters>
          <JoinedDate {...{ createdAt }} />
        </Container>
        <Container
          disableGutters
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            sx={{ mt: 3, mb: 4, mr: 2 }}
            onClick={() => handleResetForm(resetForm)}
            disabled={isSubmitting || !dirty}
          >
            Hủy
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="info"
            sx={{ mt: 3, mb: 4 }}
            disabled={isSubmitting || !dirty || !isValid}
          >
            {isSubmitting && <CircularProgress size={20} sx={{ mr: 1 }} />}
            Lưu thay đổi
          </Button>
        </Container>
      </Container>
    </Paper>
  );
};

export default BasicSettingsComponent;
