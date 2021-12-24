import CircularProgress from "@mui/material/CircularProgress";
import { AppLogo } from "@assets/icons";

const CenteredLoading = ({ message, logo = false }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {logo && <AppLogo sx={{ width: "100%", fontSize: 100 }} />}
    {message && <h3>{message}</h3>}
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress sx={{ left: "50%" }} />
    </div>
  </div>
);

export default CenteredLoading;
