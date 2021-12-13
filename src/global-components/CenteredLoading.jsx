import CircularProgress from "@mui/material/CircularProgress";

const CenteredLoading = () => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <CircularProgress />
  </div>
);

export default CenteredLoading;