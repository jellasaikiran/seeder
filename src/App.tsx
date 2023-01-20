import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import "./styles.css";
import { HomePage } from "./components/pages/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { CashKickSelectPage } from "./components/pages/CashKickSelectPage";
import { CashKickReviewPage } from "./components/pages/CashKickReviewPage";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/cashkick/create"
              element={<CashKickSelectPage />}
            />
            <Route
              path="/cashkick/review"
              element={<CashKickReviewPage />}
            />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
