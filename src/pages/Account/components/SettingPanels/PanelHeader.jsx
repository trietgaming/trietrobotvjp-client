import Typography from "@mui/material/Typography";
import { memo } from "react";

export default memo(({ children }) => {
  console.log("header RErender");
  return (
    <Typography
      variant="h5"
      align="center"
      color="inherit"
      fontWeight="bold"
      sx={{ mb: 6, pt: 4 }}
    >
      {children}
    </Typography>
  );
});
