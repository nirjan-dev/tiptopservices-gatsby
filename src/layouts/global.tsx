import React, { useState } from "react"
import { ThemeProvider } from "emotion-theming"
import { customTheme } from "../theme"
import Nav from "./nav"

import { Global, css } from "@emotion/core"
import ContactModal from "../components/contactModal"
import CloseButton from "../components/closeButton"
import ActionBtns from "../components/actionBtns"
import Footer from "./footer"

function GlobalLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ThemeProvider theme={customTheme}>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700|Nunito&display=swap");
          body {
            font-family: ${customTheme.fonts.body};
            line-height: ${customTheme.lineHeights.body};
            font-size: ${customTheme.fontSizes[1]};
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
        `}
      />
      <Nav onOpenClick={() => setIsOpen(true)} />

      {children}

      <Footer />

      <ContactModal onCloseClick={() => setIsOpen(false)} isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)} />
      </ContactModal>
    </ThemeProvider>
  )
}

export default GlobalLayout
