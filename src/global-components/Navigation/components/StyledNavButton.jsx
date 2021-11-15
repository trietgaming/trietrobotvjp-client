import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const StyledNavButton = ({
  to = "/",
  variant = "text",
  color = "secondary",
  children,
  ...rest
}) => {
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

export default StyledNavButton