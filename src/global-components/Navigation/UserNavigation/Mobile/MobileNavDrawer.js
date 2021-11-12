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
  BookOpen,
  BookOpenOutlined,
  Archive,
  ArchiveOutlined,
  Gamepad,
  GamepadOutlined,
  CoinOutlined,
  Coin,
  ShopOutlined,
  Shop,
} from "../../../../assets/icons";
import CloseIcon from "@mui/icons-material/Close";
import MobileTab from "../../components/MobileTab";

const MobileNavDrawer = ({ show, hideNav, onOpen }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      variant="temporary"
      open={show}
      onClose={hideNav}
      onOpen={onOpen}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <List sx={{ width: "270px" }}>
        <ListItem sx={{ justifyContent: "flex-end" }}>
          <IconButton onClick={hideNav}>
            <CloseIcon />
          </IconButton>
        </ListItem>
        <Divider sx={{mb: 2}} />
        <MobileTab Icon={HomeOutlined} ActiveIcon={HomeRounded} to="/">
          Trang chủ
        </MobileTab>
        <MobileTab Icon={BookOpenOutlined} ActiveIcon={BookOpen} to="/help">
          Hướng dẫn
        </MobileTab>
        <MobileTab Icon={GamepadOutlined} ActiveIcon={Gamepad} to="/games">
          Trò chơi
        </MobileTab>
        <MobileTab Icon={CoinOutlined} ActiveIcon={Coin} to="/balance">
          Kinh tế
        </MobileTab>
        <MobileTab Icon={ArchiveOutlined} ActiveIcon={Archive} to="/inventory">
          Kho đồ
        </MobileTab>
        <MobileTab Icon={ShopOutlined} ActiveIcon={Shop} to="/shop">
          Cửa hàng
        </MobileTab>
      </List>
    </SwipeableDrawer>
  );
};

export default MobileNavDrawer;
