import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SocialLinkingComponent from "./SocialLinkingComponent";
import IDAndEmailFields from "./IDAndEmailFields";
import UserAvatarChanger from "./UserAvatarChanger";
import { useFormikContext } from "formik";
import PanelHeader from "../components/PanelHeader";
import ActionButton from "../components/ActionButton";
import useUser from "@appHooks/useUser";

const BasicSettingsComponent = ({ handleResetForm, FileInputField }) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    resetForm,
    dirty,
    isValid,
    setFieldValue,
  } = useFormikContext();
  const { photoURL } = useUser("photoURL");
  console.log("dirty: ", dirty);
  console.log("isvalid: ", isValid);
  console.log(errors);
  return (
    <Paper
      sx={{
        visibility: {
          xs: "hidden",
          md: "visible",
        },
      }}
    >
      <Box
        sx={{
          visibility: "visible",
          py: { xs: 2, md: 4 },
          mx: { xs: 0, md: 3 },
        }}
      >
        <PanelHeader>{"CÀI ĐẶT CƠ BẢN"}</PanelHeader>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "flex-start",
          }}
        >
          <Box sx={{ visibility: "visible" }}>
            <UserAvatarChanger
              {...{
                photoURL,
                setFieldValue,
                selectedFile: values.selectedFile,
                FileInputField,
              }}
            />
          </Box>
          <Box
            sx={{
              visibility: "visible",
              width: "100%",
              ml: { xs: 0, md: 10 },
            }}
          >
            <IDAndEmailFields />
          </Box>
        </Box>
        <Box>
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
        </Box>
        <SocialLinkingComponent />
        <ActionButton customReset={() => handleResetForm(resetForm)} />
      </Box>
    </Paper>
  );
};

export default BasicSettingsComponent;
