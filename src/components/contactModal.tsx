import React, { Children } from "react"
import ReactModal from "react-modal"
import { Box } from "rebass"
import Button from "./button"
import { Label, Input, Textarea } from "@rebass/forms"
function ContactModal({ isOpen, children, onCloseClick, type }) {
  ReactModal.setAppElement("#___gatsby")
  let dynamicFeild
  if (type === "pestcontrol") {
    dynamicFeild = (
      <Box>
        <Label htmlFor="pest">Pests</Label>
        <Input id="pest" name="pest" />
      </Box>
    )
  } else {
    dynamicFeild = (
      <Box>
        <Label htmlFor="service">Service Needed?</Label>
        <Input id="service" name="service" />
      </Box>
    )
  }
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
        name="contact"
        action="/"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>
        <Box sx={{ display: "grid", gridGap: 4 }}>
          <Box>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" />
          </Box>
          <Box>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" />
          </Box>
          {dynamicFeild}
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
