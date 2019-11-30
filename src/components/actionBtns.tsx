import React from "react"
import Button from "./button"
import { Box } from "rebass"
import { IoIosCall } from "react-icons/io"
import { useGlobal } from "../state/state"
function ActionBtns() {
  const [{ isContactOpen }, globalActions] = useGlobal()
  return (
    <Box
      sx={{
        display: "grid",
        gridGap: "2",
        gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
      }}
      mt={2}
    >
      <Button variant="primary" onClick={() => globalActions.openModal()}>
        Get a free quote
      </Button>

      <Button as="a" href="tel:61 425 006 900" variant="outline">
        <IoIosCall /> 61 425 006 900
      </Button>
    </Box>
  )
}

export default ActionBtns
