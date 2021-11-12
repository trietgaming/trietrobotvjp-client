import StyledNavTab from "./StyledNavTab";
import { Link as ReactRouterLink } from "react-router-dom";
import { Tabs, Tooltip } from "@mui/material";
import { useLocation } from "react-router";

const NavTabs = ({ TabList }) => {
  const location = useLocation();

  return (
    <Tabs
      value={
        TabList.some((tab) => tab?.path === location.pathname)
          ? location.pathname
          : false
      }
    >
      {TabList.map((tab, index) => {
        return (
          tab && (
            <StyledNavTab
              key={index}
              to={tab?.path}
              value={
                //still correct with location '/x/y/z' and tab path is '/x' (except homepage '/')
                location.pathname.startsWith(tab?.path) && tab?.path !== "/"
                  ? location.pathname
                  : tab?.path
              }
              component={ReactRouterLink}
              icon={
                location.pathname === tab?.path
                  ? tab?.selectedIcon
                  : tab?.idleIcon
              }
              label={
                <Tooltip
                  title={tab?.title}
                  leaveDelay={200}
                  enterTouchDelay={0}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                    }}
                  ></div>
                </Tooltip>
              }
            />
          )
        );
      })}
    </Tabs>
  );
};

export default NavTabs;
