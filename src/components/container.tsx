import React from "react"
import { Box } from "rebass"

function Container(props) {
  return (
    <Box
      {...props}
      sx={{
        maxWidth: ["100%", "95%", "95%", "92%"],
        mx: "auto",
        px: 3,
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  )
}

export default Container
