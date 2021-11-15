import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { switchThemeMode } from "@assets/styles/themeSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ChangeThemeModeButton = ({ hasContent, ...rest }) => {
  const dispatch = useDispatch();
  const isLightMode = useSelector((state) => state.isLightMode);

  const handleChangeThemeMode = () => {
    dispatch(switchThemeMode());
  };

  const DisplayIcon = isLightMode ? Brightness4Icon : Brightness7Icon;

  return hasContent ? (
    <Button
      startIcon={<DisplayIcon />}
      variant="outlined"
      color="secondary"
      onClick={handleChangeThemeMode}
      {...rest}
    >
      Chuyển sang nền {isLightMode ? "tối" : "sáng"}
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
