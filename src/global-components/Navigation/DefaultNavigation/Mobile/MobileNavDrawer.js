import {
  SwipeableDrawer,
  List,
  ListItem,
  Divider,
  IconButton,
} from "@mui/material";
import {
  HomeOutlined,
  HomeRounded,
  RobotIcon,
  RobotIconOutlined,
  BookOpen,
  BookOpenOutlined,
  Gamepad,
  GamepadOutlined,
} from "../../../../assets/icons";
import CloseIcon from "@mui/icons-material/Close";
import ChangeThemeModeButton from "../ChangeThemeModeButton";
import MobileTab from "../../components/MobileTab";
import StyledNavButton from "../../components/StyledNavButton";

const MobileNavDrawer = ({ show, hideNav, onOpen }) => {
  return (
    <SwipeableDrawer
      anchor="right"
      variant="temporary"
      open={show}
      onClose={hideNav}
      onOpen={onOpen}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <List sx={{ width: "270px" }}>
        <ListItem sx={{ justifyContent: "flex-start" }}>
          <IconButton onClick={hideNav}>
            <CloseIcon />
          </IconButton>
        </ListItem>
        <Divider sx={{ mb: 2 }} />
        <MobileTab Icon={HomeOutlined} ActiveIcon={HomeRounded} to="/">
          Trang chủ
        </MobileTab>
        <MobileTab Icon={GamepadOutlined} ActiveIcon={Gamepad} to="/games">
          Trò chơi
        </MobileTab>
        <MobileTab Icon={BookOpenOutlined} ActiveIcon={BookOpen} to="/help">
          Hướng dẫn
        </MobileTab>
        <MobileTab Icon={RobotIconOutlined} ActiveIcon={RobotIcon} to="/bots">
          TrietRoBotVjp Bots
        </MobileTab>
        <Divider sx={{ my: 2 }} />
        <ListItem>
          <ChangeThemeModeButton fullWidth hasContent />
        </ListItem>
        <Divider sx={{ my: 2 }} />
        <ListItem>
          <StyledNavButton
            to="/login"
            color="primary"
            variant="outlined"
            fullWidth
          >
            Đăng nhập
          </StyledNavButton>
        </ListItem>
        <ListItem>
          <StyledNavButton
            to="/register"
            color="primary"
            variant="contained"
            fullWidth
          >
            Đăng ký
          </StyledNavButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default MobileNavDrawer;
