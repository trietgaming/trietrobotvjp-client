import { Typography, Grid } from "@mui/material";

const DefaultHome = () => {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      wrap="nowrap"
    >
      <Typography align="center" sx={{ width: "100%"}} color="primary">
        TrietRoBotVjp
      </Typography>
    </Grid>
  );
};

export default DefaultHome;
