import { styled, Tab } from "@mui/material";

const StyledNavTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:not(.Mui-selected):hover': {
    backgroundColor: `${theme.palette.primary.main}1f`,
    transition: 'ease-in-out all 0.2s'
  },
  '& > .MuiSvgIcon-root': {
    fontSize: '30px !important',
  }
}));

export default StyledNavTab;