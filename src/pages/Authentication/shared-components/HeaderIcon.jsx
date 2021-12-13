import Avatar from "@mui/material/Avatar";

const HeaderIcon = ({ Icon }) => {
  return (
    <Avatar sx={{ mx: "auto", backgroundColor: "primary.light" }}>
      <Icon />
    </Avatar>
  );
};

export default HeaderIcon;
