import React, { Children } from "react"
import ReactModal from "react-modal"
import { Box } from "rebass"
import Button from "./button"
import { Label, Input, Textarea } from "@rebass/forms"
import { navigate } from "gatsby"
function ContactModal({ isOpen, children, onCloseClick, type }) {
  const getFormData = form => {
    return Object.values(form).reduce((obj, field: any) => {
      obj[field.name] = field.value
      return obj
    }, {})
  }

  const encode = function encodeForm(data): string {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formData: any = getFormData(e.target)

    const formattedFormData: any = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
    }

    if ((type = "pestcontrol")) {
      formattedFormData.pest = formData.pest
    } else {
      formattedFormData.service = formattedFormData.service
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": type,
        ...formattedFormData,
      }),
    })
      .then(() => {
        navigate(`${type}/thanks`)
        onCloseClick()
      })
      .catch(error => {})
  }

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
    <>
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
          sx={{
            maxWidth: "65ch",
            margin: "0 auto",
          }}
        >
          <form
            name="contact"
            action={`${type}/thanks`}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={e => handleSubmit(e)}
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
                <Input id="name" name="name" required />
              </Box>
              <Box>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" required />
              </Box>
              {dynamicFeild}
              <Box>
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" name="address" required />
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridGap: "1",
                  gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
                }}
              >
                <Button variant="primary" type="submit">
                  Get a free quote
                </Button>

                <Button variant="outline" onClick={() => onCloseClick()}>
                  Cancel
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </ReactModal>

      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="text" name="phone" />
        <input type="text" name="address" />
        <input type="text" name="pest" />
        <input type="text" name="service" />
        <textarea name="message"></textarea>
      </form>
    </>
  )
}

export default ContactModal
