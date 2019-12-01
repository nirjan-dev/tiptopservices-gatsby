import React from "react"

import PageLayout from "../../layouts/pageLayout"
import Banner from "../../components/banner"
import exterminator from "../../assets/images/exterminator.jpg"
import { Heading, Text, Box } from "rebass"
import Container from "../../components/container"
import Testimonials from "../../components/testimonials"
import ActionBtns from "../../components/actionBtns"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
export default () => {
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
        about_content: _rawCompanyDescription
      }
    }
  `)
  const testimonials = [
    {
      quote: "Very prompt and the task was completed to a very high standard",
      name: "Tim Davies",
      location: "Oak Park",
    },
    {
      quote:
        "“Amazing service, very professional, punctual, polite. Highly recommended.”",
      name: "Swe V.",
      location: "Glenroy",
    },
    {
      quote: "They have a friendly team and arrived in time",
      name: "Jonny Ive",
      location: "Moonee Ponds",
    },
    {
      quote: "They have a friendly team and arrived in time",
      name: "Jonny Ive",
      location: "Moonee Ponds",
    },
    {
      quote: "They have a friendly team and arrived in time",
      name: "Jonny Ive",
      location: "Moonee Ponds",
    },
    {
      quote: "They have a friendly team and arrived in time",
      name: "Jonny Ive",
      location: "Moonee Ponds",
    },
  ]
  return (
    <PageLayout>
      <Banner
        bg={data.sanityPestcontrol.about_banner.asset.fluid}
        header={<Heading>About us</Heading>}
      />
      <Container my={[3, 4, 5]}>
        <Box
          sx={{ display: "grid", gridGap: "2" }}
          maxWidth="69ch"
          py={[2, 3, 4]}
        >
          <BlockContent
            blocks={data.sanityPestcontrol.about_content}
          ></BlockContent>
          <ActionBtns />
        </Box>
      </Container>
      <Box bg="lighter" py={[4, 5, 6]} my={[1, 2, 3]}>
        <Container>
          <Heading as="h3" fontSize={[2, 3, 3]}>
            Hear from our customers
          </Heading>

          <Testimonials testimonials={testimonials} />
        </Container>
      </Box>
    </PageLayout>
  )
}
