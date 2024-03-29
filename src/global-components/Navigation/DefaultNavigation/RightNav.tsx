import ChangeThemeModeButton from "./ChangeThemeModeButton";
import StyledNavButton from "../components/StyledNavButton";
import Toolbar from "@mui/material/Toolbar";

const RightNav = ({ mobile = false }) => {
  return (
    <Toolbar
      sx={{ display: "flex", padding: "0!important", mr: mobile ? 2.5 : 0 }}
    >
      {!mobile && <ChangeThemeModeButton sx={{ mx: 2 }} />}
      <StyledNavButton to="/login" sx={{ mr: 2 }} color="primary">
        Đăng nhập
      </StyledNavButton>
      <StyledNavButton
        to="/register"
        sx={{ flexGrow: 0 }}
        color="primary"
        variant="contained"
      >
        Đăng ký
      </StyledNavButton>
    </Toolbar>
  );
};

export default RightNav;
