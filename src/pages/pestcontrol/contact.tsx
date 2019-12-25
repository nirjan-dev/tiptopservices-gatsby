import React from "react"
import PageLayout from "../../layouts/pageLayout"
import Banner from "../../components/banner"
import { Heading, Text, Box } from "rebass"
import Container from "../../components/container"
import Testimonials from "../../components/testimonials"
import ActionBtns from "../../components/actionBtns"
import { useStaticQuery, graphql, navigate } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import SEO from "../../components/seo"
import { Label, Input, Textarea } from "@rebass/forms"
import Button from "../../components/button"
export default () => {
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
      pest: formData.pest,
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact-cleaners",
        ...formattedFormData,
      }),
    })
      .then(() => {
        navigate(`pestcontrol/thanks`)
      })
      .catch(error => {})
  }
  const data = useStaticQuery(graphql`
    {
      sanityPestcontrol {
        about_banner {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      sanityPestcontrol {
        seo_title_about
        seo_description_about
      }
    }
  `)

  return (
    <PageLayout type="pestcontrol">
      <SEO
        page={{
          title: "Contact | Tiptop Pest control",
          description: data.sanityPestcontrol.seo_description_about,
          path: "./pestcontrol/contact",
        }}
      />
      <Banner
        bg={data.sanityPestcontrol.about_banner.asset.fluid}
        header={<Heading>Contact</Heading>}
      />
      <Container my={[3, 4, 5]}>
        <Box maxWidth="69ch" py={[2, 3, 4]}>
          <form
            name="contact-pestcontrol"
            action={`thanks`}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
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
              <Box>
                <Label htmlFor="pest">Pests</Label>
                <Input id="pest" name="pest" />
              </Box>
              <Box>
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" name="address" required />
              </Box>
              <Box>
                <Button variant="primary" type="submit">
                  Get a free quote
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Container>
    </PageLayout>
  )
}
