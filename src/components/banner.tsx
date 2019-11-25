import React from "react"
import { Box } from "rebass"
function Banner({ bg, header }) {
  return (
    <Box
      as="section"
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
        height: ["40vh", "50vh"],
      }}
    >
      <Box
        bg="light"
        sx={{
          position: "absolute",
          left: "3",
          bottom: "3",
          padding: [2, 3, 4],
        }}
      >
        {header}
      </Box>
    </Box>
  )
}

export default Banner
