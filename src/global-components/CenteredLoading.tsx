import CircularProgress from "@mui/material/CircularProgress";
import { AppLogo } from "@assets/icons";
import { useRef } from "react";

const CenteredLoading = ({ message, logo = false }) => {
  const mainStyle = useRef({
    mainDiv: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    AppLogo: { width: "100%", fontSize: 100 },
    CircularProgress: { left: "50%" },
    CircularProgressParent: { display: "flex", justifyContent: "center" },
  }).current;
  return (
    <div style={mainStyle.mainDiv}>
      {logo && <AppLogo sx={mainStyle.AppLogo} />}
      {message && <h3>{message}</h3>}
      <div style={mainStyle.CircularProgressParent}>
        <CircularProgress sx={mainStyle.CircularProgress} />
      </div>
    </div>
  );
};

export default CenteredLoading;
