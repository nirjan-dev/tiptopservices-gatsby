import React from "react"
import { Box } from "rebass"
import Container from "./container"
import styled from "./styled"
import BackgroundImage from "gatsby-background-image"
import { customTheme } from "../theme"
function Banner(props) {
  const theme = customTheme
  const StyledBackgroundImage = styled(BackgroundImage)`
    background-size: cover;
    background-position: center center;
    height: 50vh;

    ::before,
    ::after {
      background-blend-mode: multiply;
    }
  `
  return (
    <StyledBackgroundImage
      fluid={props.bg}
      backgroundColor={theme.colors.primaryTransparent}
    >
      <Container
        sx={{
          position: "relative",
          height: "100%",
        }}
      >
        <Box
          color="bg"
          sx={{
            position: "absolute",
            bottom: [4, 5, 6],
          }}
        >
          {props.header ? props.header : null}
        </Box>
      </Container>
    </StyledBackgroundImage>
  )
}

export default Banner
