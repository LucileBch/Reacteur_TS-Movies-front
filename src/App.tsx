// ---------- APP ----------
// Style import
import { CssBaseline } from "@mui/material";
import { Footer, Header, Main } from "./components";

function App(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
