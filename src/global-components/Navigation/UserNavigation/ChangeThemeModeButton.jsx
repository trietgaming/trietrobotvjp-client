import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useDispatch, useSelector } from "react-redux";
import { switchThemeMode } from "@assets/styles/themeSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ChangeThemeModeButton = ({ hasContent, ...rest }) => {
  const dispatch = useDispatch();
  const isLightMode = useSelector((state) => state.isLightMode);

  const DisplayIcon = isLightMode ? Brightness4Icon : Brightness7Icon;

  return (
    <MenuItem
      color="secondary"
      onClick={() => dispatch(switchThemeMode())}
      {...rest}
    >
      <ListItemIcon>
        <DisplayIcon />
      </ListItemIcon>
      Nền {isLightMode ? "tối" : "sáng"}
    </MenuItem>
  );
};

export default ChangeThemeModeButton;
