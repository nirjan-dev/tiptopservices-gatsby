import React from "react"
import PageLayout from "../../layouts/pageLayout"
import Banner from "../../components/banner"
import { Heading, Text, Box } from "rebass"
import Container from "../../components/container"
import Testimonials from "../../components/testimonials"
import ActionBtns from "../../components/actionBtns"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import SEO from "../../components/seo"
import { Label, Input, Textarea } from "@rebass/forms"
import Button from "../../components/button"
export default () => {
  const data = useStaticQuery(graphql`
    {
      sanityCleaning {
        about_banner {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }


      sanityCleaning {
        seo_description_about
      }
    }
  `)
  const testimonials = data.allSanityReview.nodes

  return (
    <PageLayout type="cleaners">
      <SEO
        page={{
          title: 'Contact | Tiptop Cleaners',
          description: data.sanityCleaning.seo_description_about,
          path: "./cleaners/contact",
        }}
      />
      <Banner
        bg={data.sanityCleaning.about_banner.asset.fluid}
        header={<Heading>Contact</Heading>}
      />
      <Container my={[3, 4, 5]}>
        <Box
       
          maxWidth="69ch"
          py={[2, 3, 4]}
        >
            <form
            name="contact-cleaners"
            action={`thanks`}
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
                <Input id="name" name="name" required />
              </Box>
              <Box>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" required />
              </Box>
              <Box>
                <Label htmlFor="service">Service Needed?</Label>
                <Input id="service" name="service" />
            </Box>
              <Box>
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" name="address" required />
              </Box>
              <Box
            
              >
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
