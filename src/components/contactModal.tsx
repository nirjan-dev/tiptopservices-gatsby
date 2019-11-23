import React, { Children } from "react"
import ReactModal from "react-modal"
import { Box } from "rebass"
import Button from "./button"
import { Label, Input, Textarea } from "@rebass/forms"
import Stack from "stack-styled/emotion/Stack"
function ContactModal({ isOpen, children, onCloseClick }) {
  ReactModal.setAppElement("#___gatsby")
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {},
        content: {
          paddingTop: "3.5rem",
          top: "0px",
          left: "0px",
          bottom: "0px",
          right: "0px",
          border: "none",
        },
      }}
    >
      {children}

      <Box as="form">
        <Stack gridGap={3}>
          <Box>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" />
          </Box>
          <Box>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" />
          </Box>
          <Box>
            <Label htmlFor="pest">Pests</Label>
            <Input id="pest" name="pest" />
          </Box>
          <Box>
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" name="address" />
          </Box>
          <Stack gridGap={1}>
            <Button variant="primary">Get a free quote</Button>

            <Button variant="outline" onClick={() => onCloseClick()}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </ReactModal>
  )
}

export default ContactModal
