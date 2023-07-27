import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { switchThemeMode } from "@assets/styles/themeSlice";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const ChangeThemeModeButton = ({ hasContent, ...rest }) => {
  const dispatch = useDispatch();
  const isLightMode = useSelector((state) => state.isLightMode);

  const handleChangeThemeMode = () => {
    dispatch(switchThemeMode());
  };

  const DisplayIcon = isLightMode
    ? () => <BedtimeIcon sx={{ color: "black" }} />
    : Brightness7Icon;

  return hasContent ? (
    <Button
      startIcon={<DisplayIcon />}
      variant="outlined"
      color="contrast"
      onClick={handleChangeThemeMode}
      {...rest}
    >
      Chuyển sang nền {isLightMode ? "tối" : "sáng"}
    </Button>
  ) : (
    <IconButton
      color="contrast"
      variant="text"
      onClick={handleChangeThemeMode}
      {...rest}
    >
      <DisplayIcon />
    </IconButton>
  );
};

export default ChangeThemeModeButton;
