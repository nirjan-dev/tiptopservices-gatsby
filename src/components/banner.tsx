import React from "react"
import { Box } from "rebass"
import Container from "./container"
import styled from "./styled"
import BackgroundImage from "gatsby-background-image"
function Banner({ bg, header }) {
  const StyledBackgroundImage = styled(BackgroundImage)`
    background-blend-mode: "multiply";
    background-size: "cover";
    background-position: "center center";
    height: 50vh;
  `
  return (
    <StyledBackgroundImage fluid={bg}>
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
          {header}
        </Box>
      </Container>
    </StyledBackgroundImage>
  )
}

export default Banner
