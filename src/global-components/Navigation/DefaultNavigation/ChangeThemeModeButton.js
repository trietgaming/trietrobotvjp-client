import { IconButton, Button } from "@mui/material";
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

  return hasContent ? (
    <Button
      startIcon={<DisplayIcon />}
      variant="outlined"
      color="secondary"
      onClick={handleChangeThemeMode}
      {...rest}
    >
      Chuyển sang nền {isLightThemeMode ? "tối" : "sáng"}
    </Button>
  ) : (
    <IconButton
      color="secondary"
      variant="text"
      onClick={handleChangeThemeMode}
      {...rest}
    >
      <DisplayIcon />
    </IconButton>
  );
};

export default ChangeThemeModeButton;
