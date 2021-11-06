import {
  Toolbar,
  IconButton,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import AccountButton from './AccountButton';

const RightNav = () => {

  return (
    <Toolbar sx={{ display: "flex", padding: "0!important" }}>
      <IconButton sx={{ mx: 2 }}>
        <Notifications />
      </IconButton>
      <AccountButton/>
    </Toolbar>
  );
};

export default RightNav;
