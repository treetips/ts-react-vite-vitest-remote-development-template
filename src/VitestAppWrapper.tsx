import { ThemeProvider, createTheme } from "@mui/material";
import { type ReactNode, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const theme = createTheme({});

export const VitestAppWrapper = ({ children }: Props) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
};
