import Paper from "@mui/material/Paper";
import PanelHeader from "../PanelHeader";
import Box from "@mui/material/Box";
import CurrentUserSetting from "./CurrentUserSetting";

const AdvancedSettings = () => {
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
        }}
      >
        <PanelHeader>{"CÀI ĐẶT NÂNG CAO"}</PanelHeader>
        <CurrentUserSetting />
      </Box>
    </Paper>
  );
};

export default AdvancedSettings;
