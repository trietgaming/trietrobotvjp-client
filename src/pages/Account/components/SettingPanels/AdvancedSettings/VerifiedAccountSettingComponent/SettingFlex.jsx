import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const SettingFlex = ({ children, ...props }) => (
  <Paper sx={{ visibility: { md: "hidden" }, my: 1.5 }}>
    <Container
      sx={{
        display: "flex",
        justifyContent: { sm: "space-between", xs: "space-evenly" },
        my: 2.5,
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        visibility: "visible",
      }}
      {...props}
    >
      {children}
    </Container>
  </Paper>
);

export default SettingFlex;
