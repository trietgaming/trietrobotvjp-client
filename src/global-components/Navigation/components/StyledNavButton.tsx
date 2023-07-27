import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { ExtendedButtonProps } from "@mui/material";

declare type ButtonProps = ExtendedButtonProps;

const StyledNavButton = ({
  to = "/",
  variant = "text",
  color = "contrast",
  children,
  ...rest
}: ExtendedButtonProps) => {
  return (
    <Button
      variant={variant}
      color={color}
      component={Link}
      to={to}
      style={{ textDecoration: "none" }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default StyledNavButton;
