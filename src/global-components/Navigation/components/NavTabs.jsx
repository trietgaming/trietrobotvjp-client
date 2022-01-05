import StyledNavTab from "./StyledNavTab";
import { Link as ReactRouterLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Tabs from "@mui/material/Tabs";
import { useLocation } from "react-router";

const NavTabs = ({ TabList, ...props }) => {
  const location = useLocation();

  return (
    <Tabs
      value={
        TabList.some((tab) => tab?.path === location.pathname) &&
        location.pathname
      }
      {...props}
    >
      {TabList.map((tab, index) => {
        return (
          tab && (
            <StyledNavTab
              key={index}
              to={tab?.path}
              value={
                //still correct with location '/x/y/z' and tab path is '/x' (except homepage '/')
                (tab?.exact
                  ? location.pathname === tab?.path
                  : location.pathname.startsWith(tab?.path)) &&
                tab?.path !== "/"
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
                tab?.title ? (
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
                ) : (
                  tab?.label
                )
              }
            />
          )
        );
      })}
    </Tabs>
  );
};

export default NavTabs;
