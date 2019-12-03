import React from "react"
import Button from "./button"
import { Box } from "rebass"
import { IoIosCall } from "react-icons/io"
import { useGlobal } from "../state/state"
import { useStaticQuery, graphql } from "gatsby"
function ActionBtns() {
  const data = useStaticQuery(graphql`
    {
      sanityPestcontrol {
        call_button_text
        quote_button_text
      }
    }
  `)
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
        {data.sanityPestcontrol.quote_button_text}
      </Button>

      <Button
        as="a"
        href={`tel:${data.sanityPestcontrol.call_button_text}`}
        variant="outline"
      >
        <IoIosCall /> {data.sanityPestcontrol.call_button_text}
      </Button>
    </Box>
  )
}

export default ActionBtns
