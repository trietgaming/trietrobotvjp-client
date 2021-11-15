import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import defaultAvatar from "@assets/images/default-avatar.jpg";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import { memo } from "react";
import Resizer from "react-image-file-resizer";
import { useSnackbar } from "notistack";

const UserAvatarDisplayer = memo(({ photoURL, selectedFile }) => {
  console.log("USERAVASASDLASLDASPDLASPASD");
  return (
    <>
      <Box
        sx={{
          position: "relative",
          "&:hover": { opacity: "0.7" },
          "&:hover .MuiSvgIcon-root": { opacity: "1" },
          transition: ".15s ease-in-out",
        }}
      >
        <label htmlFor="avatar-upload">
          <Avatar
            alt="Avatar"
            src={selectedFile || photoURL || defaultAvatar}
            sx={{
              width: 128,
              height: 128,
              mb: 2.5,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              cursor: "pointer",
            }}
          >
            <CreateIcon
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 32,
                height: 32,
                opacity: "0",
                transition: ".15s ease-in-out",
                color: "white",
              }}
            />
          </Box>
        </label>
      </Box>
      <Typography align="center" variant="body1" color="inherit">
        Ảnh đại diện
      </Typography>
    </>
  );
});

const UserAvatarChanger = ({
  photoURL,
  setFieldValue,
  selectedFile,
  fileInputField: FileInputField,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        230,
        230,
        "JPEG",
        70,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const onFileSelect = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFieldValue("selectedFile", null);
      return;
    }
    try {
      const file = await resizeFile(e.target.files[0]);
      setFieldValue("selectedFile", file);
    } catch {
      enqueueSnackbar(
        "Tệp tải lên không hợp lệ (Tệp không phải hình ảnh).",
        { variant: "error", persist: true }
      );
    }
  };

  return (
    <>
      <UserAvatarDisplayer {...{ photoURL, selectedFile }} />
      <FileInputField onChange={onFileSelect} />
    </>
  );
};

export default UserAvatarChanger;
