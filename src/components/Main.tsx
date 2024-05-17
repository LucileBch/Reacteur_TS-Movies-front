// ---------- MAIN component ----------
// Hooks import
import { endpoints } from "../api/endpoints";
import { useFetch } from "../hooks/useFetch";

// Type import
import { TMovies, moviesSchema } from "../types";

// Style import
import { Box, Container, Grid, Typography } from "@mui/material";
import { MovieCard } from "./MovieCard";

export function Main(): JSX.Element {
  const { data, loading } = useFetch<TMovies>(
    endpoints.getAllMovies,
    moviesSchema
  );

  return loading || data === null ? (
    <Box>
      <Typography variant="body1">Is Loading...</Typography>
    </Box>
  ) : (
    <main>
      <Container maxWidth="xl" sx={{ py: "50px" }}>
        <Box sx={{ px: "10px" }}>
          <Typography variant="h3" component="h2">
            {data.length} films disponibles 🚀
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ py: "20px" }}>
          {data.map((movie) => {
            return (
              <Grid item xs={3} key={movie.id}>
                <MovieCard movieInfo={movie} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </main>
  );
}
