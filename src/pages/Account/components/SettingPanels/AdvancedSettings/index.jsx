import Paper from "@mui/material/Paper";
import PanelHeader from "../PanelHeader";
import Container from "@mui/material/Container";
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
      <Container
        sx={{
          visibility: "visible",
          py: { xs: 2, md: 4 },
        }}
      >
        <PanelHeader>{"CÀI ĐẶT NÂNG CAO"}</PanelHeader>
        <CurrentUserSetting />
      </Container>
    </Paper>
  );
};

export default AdvancedSettings;
