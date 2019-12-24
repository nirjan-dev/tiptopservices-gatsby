import React from "react"
import { ThemeProvider } from "emotion-theming"
import { customTheme } from "../theme"
import { Global, css } from "@emotion/core"
import { useGlobal } from "../state/state"

function GlobalLayout({ children }) {
  const [{ isContactOpen }, globalActions] = useGlobal()
  return (
    <ThemeProvider theme={customTheme}>
      <Global
        styles={css`
          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }
          html {
            font-size: ${customTheme.fontSizes[1]};
          }
          body {
            font-family: ${customTheme.fonts.body};
            line-height: ${customTheme.lineHeights.body};

            padding: 0;
            margin: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${customTheme.fonts.heading};
            line-height: ${customTheme.lineHeights.heading};
          }

          h1,
          .h1 {
            font-size: ${customTheme.fontSizes[6]};
          }
          h2,
          .h2 {
            font-size: ${customTheme.fontSizes[5]};
          }
          h3,
          .h3 {
            font-size: ${customTheme.fontSizes[4]};
          }
          h4,
          .h4 {
            font-size: ${customTheme.fontSizes[3]};
          }
          h5,
          .h5 {
            font-size: ${customTheme.fontSizes[2]};
          }
          h6,
          .h6 {
            font-size: ${customTheme.fontSizes[1]};
          }
          small,
          .small {
            font-size: ${customTheme.fontSizes[0]};
          }

          .body-font {
            font-family: ${customTheme.fonts.body};
          }

          .ReactModal__Overlay {
            opacity: 0;
            transition: opacity 400ms ease-in-out;
          }

          .ReactModal__Overlay--after-open {
            opacity: 1;
          }

          .ReactModal__Overlay--before-close {
            opacity: 0;
          }

          svg {
            vertical-align: middle;
            font-size: ${customTheme.fontSizes[3]};
          }
          button svg {
            font-size: inherit;
          }

          ul,
          ol {
            padding-left: ${customTheme.space[5]};
          }

          li {
            margin-bottom: ${customTheme.space[2]};
          }

          .gatsby-plugin-transition-link-portal {
            width: 100%;
          }

          @media (min-width: 90em) {
            html {
              font-size: calc(${customTheme.fontSizes[1]} + 0.3vw);
            }
          }
        `}
      />
      {children}
    </ThemeProvider>
  )
}

export default GlobalLayout
