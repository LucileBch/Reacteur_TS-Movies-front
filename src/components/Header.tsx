// ---------- HEADER component ----------
// Assets imports
import { AdbOutlined } from "@mui/icons-material";

// Style imports
import { Box, Container, Typography } from "@mui/material";

export function Header(): JSX.Element {
  return (
    <header style={{ backgroundColor: "#1875D1" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: "30px",
          color: "#FFFFFF",
          fontWeight: "700",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <AdbOutlined sx={{ fontSize: "30px" }} />
          <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
            MOVIES
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="overline"
            sx={{ fontSize: "16px", fontWeight: "bold", px: "10px" }}
          >
            PRODUCTS
          </Typography>
          <Typography
            variant="overline"
            sx={{ fontSize: "16px", fontWeight: "bold", px: "10px" }}
          >
            PRICING
          </Typography>
          <Typography
            variant="overline"
            sx={{ fontSize: "16px", fontWeight: "bold", px: "10px" }}
          >
            BLOG
          </Typography>
        </Box>
      </Container>
    </header>
  );
}
