import React from "react"
import Stack from "stack-styled/emotion/Stack"
import Button from "./button"
import Container from "./container"
import { IoIosCall } from "react-icons/io"
function ActionBtns({ onOpenClick }) {
  return (
    <Container>
      <Stack gridGap={1} mt={2}>
        <Button
          variant="primary"
          fontSize={[1, 2, 3]}
          onClick={() => onOpenClick()}
        >
          Get a free quote
        </Button>

        <Button
          as="a"
          href="tel:61 425 006 900"
          variant="outline"
          fontSize={[1, 2, 3]}
        >
          <IoIosCall /> 61 425 006 900
        </Button>
      </Stack>
    </Container>
  )
}

export default ActionBtns
