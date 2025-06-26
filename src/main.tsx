import { createTheme, ThemeProvider } from "@mui/material";
import App from "@src/App";
import "@src/index.css";
import { StrictMode } from "react";
import reactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({});

reactDom.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
