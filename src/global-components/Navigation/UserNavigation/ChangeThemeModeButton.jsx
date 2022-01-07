import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useDispatch, useSelector } from "react-redux";
import { switchThemeMode } from "@assets/styles/themeSlice";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const ChangeThemeModeButton = ({ ...rest }) => {
  const dispatch = useDispatch();
  const isLightMode = useSelector((state) => state.isLightMode);

  const DisplayIcon = isLightMode
    ? () => <BedtimeIcon sx={{ color: "black" }} />
    : Brightness7Icon;

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
