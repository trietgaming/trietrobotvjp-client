import Container from "@mui/material/Container";
import Settings from "./components/Settings";
import SettingPanels from "./components/SettingPanels";

const Account = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", height: "100%", justifyContent: "flex-end" }}
      disableGutters
    >
      <Settings />
      <SettingPanels />
    </Container>
  );
};

export default Account;
