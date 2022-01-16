import Typography from "@mui/material/Typography";
import { memo } from "react";

const PanelHeader = memo(({ children }) => {
  console.log("header RErender");
  return (
    <Typography
      variant="h5"
      align="center"
      color="inherit"
      fontWeight="bold"
      sx={{ py: 4, mx: 4 }}
    >
      {children}
    </Typography>
  );
});

export default PanelHeader;
