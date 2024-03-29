import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const MobileTab = ({ Icon, ActiveIcon, to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const DisplayIcon = isActive ? ActiveIcon : Icon;

  return (
    <ListItem button component={Link} to={to}>
      <ListItemIcon sx={{ color: "inherit" }}>
        <DisplayIcon
          sx={{ color: `${isActive ? "primary.main" : "inherit"}` }}
        />
      </ListItemIcon>
      <ListItemText sx={{ color: `${isActive ? "primary.main" : "inherit"}` }}>
        {children}
      </ListItemText>
    </ListItem>
  );
};

export default MobileTab;
