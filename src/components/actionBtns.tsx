import React from "react"
import Stack from "stack-styled/emotion/Stack"
import Button from "./button"
import { IoIosCall } from "react-icons/io"
import { useGlobal } from "../state/state"
function ActionBtns() {
  const [{ isContactOpen }, globalActions] = useGlobal()
  return (
    <Stack gridGap={1} mt={2} minColumnWidth={"12rem"}>
      <Button variant="primary" onClick={() => globalActions.openModal()}>
        Get a free quote
      </Button>

      <Button as="a" href="tel:61 425 006 900" variant="outline">
        <IoIosCall /> 61 425 006 900
      </Button>
    </Stack>
  )
}

export default ActionBtns
