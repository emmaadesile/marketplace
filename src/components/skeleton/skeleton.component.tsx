import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

export const SkeletonLoader = () => {
  return (
    <Grid container spacing={3} data-testid="skeleton-loader">
      {Array.from({ length: 12 }).map((item, index) => (
        <Grid item lg={3} sm={6} xs={12} key={index}>
          <Skeleton variant="rectangular" width={300} height={120} />
          <Skeleton
            variant="text"
            width={100}
            sx={{ fontSize: "1rem", marginTop: "1rem" }}
          />
          <Skeleton variant="text" width={300} sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={300} sx={{ fontSize: "1rem" }} />
          <Skeleton
            variant="text"
            width={50}
            sx={{ fontSize: "1rem", marginTop: "1rem" }}
          />
          <Skeleton
            variant="rounded"
            width={300}
            height={30}
            sx={{ marginTop: "1rem" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};
