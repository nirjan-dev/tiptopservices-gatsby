import React, { Children } from "react"
import ReactModal from "react-modal"
import { Box } from "rebass"
import Button from "./button"
import { Label, Input, Textarea } from "@rebass/forms"
function ContactModal({ isOpen, children, onCloseClick }) {
  ReactModal.setAppElement("#___gatsby")
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          zIndex: "1200",
          background: "rgba(0,0,0,0.75)",
        },
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

      <Box
        as="form"
        sx={{
          maxWidth: "65ch",
          margin: "0 auto",
        }}
      >
        <Box sx={{ display: "grid", gridGap: 3 }}>
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
          <Box
            sx={{
              display: "grid",
              gridGap: "1",
              gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
            }}
          >
            <Button variant="primary">Get a free quote</Button>

            <Button variant="outline" onClick={() => onCloseClick()}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </ReactModal>
  )
}

export default ContactModal
