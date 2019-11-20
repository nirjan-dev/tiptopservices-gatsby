import React from "react"
import { Box } from "rebass"

function Container(props) {
  return (
    <Box
      {...props}
      sx={{
        maxWidth: 512,
        mx: "auto",
        px: 3,
      }}
    >
      {props.children}
    </Box>
  )
}

export default Container
