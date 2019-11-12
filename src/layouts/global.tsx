import React from "react"
import { ThemeProvider } from "emotion-theming"
import { customTheme } from "../theme"
import Nav from "./nav"

import { Global, css } from "@emotion/core"

function GlobalLayout({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Montserrat|Nunito&display=swap");
        `}
      />
      <Nav />

      {children}
    </ThemeProvider>
  )
}

export default GlobalLayout
