import React from "react"
import { Box } from "rebass"
import { IoIosClose } from "react-icons/io"

function CloseButton(props) {
  return (
    <Box
      {...props}
      as="button"
      color="gray"
      sx={{
        fontSize: "4rem",
        padding: "0rem",
        border: "none",
        position: "absolute",
        right: "0rem",
        top: "0rem",
        background: "transparent",
      }}
    >
      <IoIosClose style={{ fontSize: "4rem" }} />
    </Box>
  )
}

export default CloseButton
