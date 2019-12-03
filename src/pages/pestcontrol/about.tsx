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
        customer_review_heading
      }

      allSanityReview(filter: { review_type: { eq: "Pest Control" } }) {
        nodes {
          name
          content
          location
        }
      }
    }
  `)
  const testimonials = data.allSanityReview.nodes

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
            {data.sanityPestcontrol.customer_review_heading}
          </Heading>

          <Testimonials testimonials={testimonials} />
        </Container>
      </Box>
    </PageLayout>
  )
}
