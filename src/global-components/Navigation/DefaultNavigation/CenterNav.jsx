import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
//Icons Imports
import {
  HomeOutlined,
  HomeRounded,
  RobotIcon,
  RobotIconOutlined,
  BookOpen,
  BookOpenOutlined,
  Gamepad,
  GamepadOutlined,
} from "@assets/icons";
//Components
import NavTabs from "../components/NavTabs";
import { useLocation } from "react-router";

const CenterNav = () => {
  const location = useLocation();

  const tabList = [
    {
      path: "/",
      idleIcon: <HomeOutlined />,
      selectedIcon: <HomeRounded />,
      title: "Trang chủ",
    },
    {
      path: "/games",
      idleIcon: <GamepadOutlined />,
      selectedIcon: <Gamepad />,
      title: "Trò chơi",
    },
    {
      path: "/help",
      idleIcon: <BookOpenOutlined />,
      selectedIcon: <BookOpen />,
      title: "Hướng dẫn",
    },
    {
      path: "/bots",
      idleIcon: <RobotIconOutlined />,
      selectedIcon: <RobotIcon />,
      title: "TrietRoBotVjp bots",
    },
  ];

  return (
    <Toolbar sx={{ display: "flex", padding: "0!important" }}>
      <Hidden mdDown>
        <NavTabs location={location} TabList={tabList} />
      </Hidden>
      <Hidden mdUp>
        <NavTabs
          location={location}
          TabList={[tabList.find((tab) => tab.path === location.pathname)]}
        />
      </Hidden>
    </Toolbar>
  );
};

export default CenterNav;
