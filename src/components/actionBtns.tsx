import React from "react"
import Stack from "stack-styled/emotion/Stack"
import Button from "./button"
import Container from "./container"
import { IoIosCall } from "react-icons/io"
function ActionBtns({ onOpenClick }) {
  return (
    <Stack gridGap={1} mt={2} minColumnWidth={"10rem"}>
      <Button variant="primary" onClick={() => onOpenClick()}>
        Get a free quote
      </Button>

      <Button as="a" href="tel:61 425 006 900" variant="outline">
        <IoIosCall /> 61 425 006 900
      </Button>
    </Stack>
  )
}

export default ActionBtns
