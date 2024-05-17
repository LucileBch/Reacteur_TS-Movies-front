// ---------- FOOTER component ----------

// Style import
import { Box, Container, Typography } from "@mui/material";

export function Footer(): JSX.Element {
  return (
    <footer style={{ backgroundColor: "#1875D1" }}>
      <Container sx={{ py: "30px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              px: "10px",
              color: "#FFFFFF",
            }}
          >
            | Lucile Bouchire | Le Reacteur | 2024 |
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
