import React from "react"
import { Box } from "rebass"
import Container from "./container"
function Banner({ bg, header }) {
  return (
    <Box
      as="section"
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "primary",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center center",

        height: ["40vh", "50vh"],
      }}
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
          {header}
        </Box>
      </Container>
    </Box>
  )
}

export default Banner
