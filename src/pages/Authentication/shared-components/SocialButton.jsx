import Button from "@mui/material/Button";

const SocialButton = ({
  Icon,
  children,
  bgColor,
  textColor,
  sx,
  onClick,
  disabled,
  ...rest
}) => (
  <Button
    variant="contained"
    sx={{
      width: "100%",
      color: textColor,
      backgroundColor: bgColor,
      "&:hover": { backgroundColor: `${bgColor}df` },
      "&:disabled": { backgroundColor: `${bgColor}5f` },
      ...sx,
    }}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    <Icon sx={{ left: "0.5em", position: "absolute", mb: 0.1 }} />
    <span style={{ marginRight: "5em", transform: "translateX(2.5em)" }}>
      {children}
    </span>
  </Button>
);

export default SocialButton;
