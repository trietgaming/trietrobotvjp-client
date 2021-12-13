import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

const SkeletonLoading = () => {
  return (
    <Container sx={{ minHeight: "100%" }}>
      <Skeleton variant="rectangular" width="100%" height={45} />
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Skeleton
          variant="circular"
          width={128}
          height={128}
          sx={{ display: "inline-block", mt: 3, pr: 16, mr: 10 }}
        />
        <Container>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={45}
            sx={{ display: "inline-block", mt: 3 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={45}
            sx={{ display: "block", mt: 3 }}
          />
        </Container>
      </Container>
      <Skeleton variant="rectangular" width="100%" height={45} sx={{ mt: 3 }} />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={500}
        sx={{ my: 3 }}
      />
    </Container>
  );
};

export default SkeletonLoading;
