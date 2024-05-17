// ---------- CARD component ----------

// Style import
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export function MovieCard({ movieInfo }): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={movieInfo.poster}
        title="movie image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movieInfo.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "justify" }}
        >
          {movieInfo.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">EDITER</Button>
        <Button size="small" sx={{ color: "red" }}>
          SUPPRIMER
        </Button>
      </CardActions>
    </Card>
  );
}
