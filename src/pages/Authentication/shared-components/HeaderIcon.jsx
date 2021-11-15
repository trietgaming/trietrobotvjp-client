import styled from "@mui/styled-engine";
import Avatar from "@mui/material/Avatar";

const StyledHeaderIcon = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

const HeaderIcon = ({ Icon }) => {
  return (
    <StyledHeaderIcon sx={{ mx: "auto" }}>
      <Icon />
    </StyledHeaderIcon>
  );
};

export default HeaderIcon;
