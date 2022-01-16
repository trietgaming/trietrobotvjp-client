import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import defaultAvatar from "@assets/images/default-avatar.jpg";
import { useCallback } from "react";
import CreateIcon from "@mui/icons-material/Create";
import Button from "@mui/material/Button";
import { memo } from "react";
import { useSnackbar } from "notistack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";

const UserAvatarDisplayer = memo(
  ({ photoURL, selectedFile, deleteAvatarFunction }) => {
    console.log("USERAVASASDLASLDASPDLASPASD");
    return (
      <Paper
        sx={{
          visibility: {
            md: "hidden",
            xs: "visible",
          },
        }}
      >
        <Hidden mdUp>
          <Typography variant="h6" textAlign="center" sx={{ py: 4 }}>
            Ảnh đại diện
          </Typography>
        </Hidden>
        <Box sx={{ visibility: "visible" }}>
          <Box
            sx={{
              position: "relative",
              "&:hover": { opacity: "0.7" },
              "&:hover .MuiSvgIcon-root": { opacity: "1" },
              transition: ".15s ease-in-out",
              width: {
                xs: 128,
                md: "auto",
              },
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <label htmlFor="avatar-upload">
              <Avatar
                alt="Avatar"
                src={
                  selectedFile !== "default"
                    ? selectedFile || photoURL || defaultAvatar
                    : defaultAvatar
                }
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
          <Box sx={{ pb: { xs: 4, md: 0 }, mb: { xs: 5, md: 0 } }}>
            <Button
              disabled={selectedFile === "default" || !photoURL}
              onClick={deleteAvatarFunction}
              sx={{
                display: "flex",
                mx: "auto",
              }}
            >
              Xóa ảnh
            </Button>
          </Box>
        </Box>
      </Paper>
    );
  }
);

const UserAvatarChanger = ({
  photoURL,
  setFieldValue,
  selectedFile,
  FileInputField,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const handleResizeImage = (file, responseUriFunc) => {
    const resizeImage = ({ image, maxWidth, maxHeight }) => {
      const qualityDecimal = 70 / 100; // 70 is quality
      const canvas = document.createElement("canvas");

      let width = image.width;
      let height = image.height;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }
      if (height > maxHeight) {
        width = Math.round((width * maxHeight) / height);
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(image, 0, 0, width, height);

      return canvas.toDataURL("image/jpeg", qualityDecimal);
    };

    if (file) {
      if (file.type && !file.type.includes("image")) {
        throw Error("File Is NOT Image!");
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          const image = new Image();
          image.src = reader.result;
          image.onload = () => {
            const resizedDataUrl = resizeImage({
              image,
              maxWidth: 230,
              maxHeight: 230,
            });

            responseUriFunc(resizedDataUrl);
          };
        };

        reader.onerror = (error) => {
          throw Error(error);
        };
      }
    } else {
      throw Error("File Not Found!");
    }
  };

  const onFileSelect = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFieldValue("selectedFile", null);
      return;
    }
    try {
      handleResizeImage(e.target.files[0], (file) => {
        setFieldValue("selectedFile", file);
      });
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Tệp tải lên không hợp lệ (Tệp không phải hình ảnh).", {
        variant: "error",
        persist: true,
      });
    }
  };

  const deleteAvatarFunction = useCallback(() => {
    setFieldValue("selectedFile", "default");
  }, []);

  return (
    <>
      <UserAvatarDisplayer
        {...{ photoURL, selectedFile, deleteAvatarFunction }}
      />
      <FileInputField onChange={onFileSelect} />
    </>
  );
};

export default UserAvatarChanger;
