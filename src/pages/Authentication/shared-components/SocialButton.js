import Button from "@mui/material/Button";

const SocialButton = ({ Icon, children, bgColor, textColor, sx, onClick }) => (
  <Button
    variant="contained"
    sx={{
      ...sx,
      width: "100%",
      color: textColor,
      backgroundColor: bgColor,
      "&:hover": { backgroundColor: `${bgColor}df` },
    }}
    onClick={onClick}
  >
    <Icon sx={{ left: "0.5em", position: "absolute", mb: 0.1 }} />
    {children}
  </Button>
);

export default SocialButton;
