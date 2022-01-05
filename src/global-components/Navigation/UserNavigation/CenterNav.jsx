import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
//Icons Imports
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
} from "@assets/icons";
//Components
import NavTabs from "../components/NavTabs";

const CenterNav = () => {
  const tabList = [
    {
      path: "/",
      idleIcon: <HomeOutlined />,
      selectedIcon: <HomeRounded />,
      title: "Trang chủ",
    },
    {
      path: "/help",
      idleIcon: <BookOpenOutlined />,
      selectedIcon: <BookOpen />,
      title: "Hướng dẫn",
    },
    {
      path: "/games",
      idleIcon: <GamepadOutlined />,
      selectedIcon: <Gamepad />,
      title: "Trò chơi",
    },
    {
      path: "/balance",
      idleIcon: <CoinOutlined />,
      selectedIcon: <Coin />,
      title: "Kinh tế",
    },
    {
      path: "/inventory",
      idleIcon: <ArchiveOutlined />,
      selectedIcon: <Archive />,
      title: "Kho đồ",
    },
    {
      path: "/shop",
      idleIcon: <ShopOutlined />,
      selectedIcon: <Shop />,
      title: "Cửa hàng",
    },
  ];

  return (
    <Toolbar sx={{ display: "flex", padding: "0!important" }}>
      <Hidden mdDown>
        <NavTabs TabList={tabList} />
      </Hidden>
      <Hidden mdUp>
        <NavTabs
          TabList={[tabList.find((tab) => tab.path === location.pathname)]}
        />
      </Hidden>
    </Toolbar>
  );
};

export default CenterNav;
