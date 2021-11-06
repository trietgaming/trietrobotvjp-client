import { MenuItem, ListItemIcon } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeMode } from "../themeSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ChangeThemeModeButton = ({ hasContent, ...rest }) => {
  const dispatch = useDispatch();
  const isLightThemeMode = useSelector((state) => state.themeLightMode);

  const handleChangeThemeMode = () => {
    const action = changeThemeMode();
    dispatch(action);
  };

  const DisplayIcon = isLightThemeMode ? Brightness4Icon : Brightness7Icon;

  return (
    <MenuItem color="secondary" onClick={handleChangeThemeMode} {...rest}>
      <ListItemIcon>
        <DisplayIcon />
      </ListItemIcon>
      Nền {isLightThemeMode ? "tối" : "sáng"}
    </MenuItem>
  );
};

export default ChangeThemeModeButton;
