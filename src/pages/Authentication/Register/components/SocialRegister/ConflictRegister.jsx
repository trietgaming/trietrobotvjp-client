import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SmallNav from "../../../shared-components/SmallNav";
import ConflictRegisterForm from "./ConflictRegisterForm";

const ConflictRegister = ({ payload }) => {
  return (
    <>
      <SmallNav />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 6,
          position: "relative",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            left: "50%",
            my: { xs: 0, md: 6 },
            py: 4,
            width: { xs: "100%", md: 450 },
          }}
        >
          <Box sx={{ mx: 2 }}>
            <ConflictRegisterForm payload={payload} />
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default ConflictRegister;
