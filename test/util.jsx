
import React from 'react';
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";
import { LangProvider } from "@mlambda-net/core/lang";

let Wrap = ({children}) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LangProvider lang="en">
          {children}
        </LangProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Wrap;