import Container from "@mui/material/Container";
import Settings from "./components/Settings";
import { useState } from "react";
import SettingPanels from "./components/SettingPanels";

const Account = () => {
  const [currentTabValue, setNewTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setNewTabValue(newValue);
  };

  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", height: "100%" }}
      disableGutters
    >
      <Settings {...{ currentTabValue, handleTabChange }} />
      <SettingPanels
        sx={{ mx: "auto", my: 3 }}
        selectedIndex={currentTabValue}
      />
    </Container>
  );
};

export default Account;
