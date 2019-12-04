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
import SEO from "../../components/seo"
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
        about_content: _rawCompanyDescription
        customer_review_heading
      }

      allSanityReview(filter: { review_type: { eq: "Cleaning" } }) {
        nodes {
          name
          content
          location
        }
      }
      sanityCleaning {
        seo_title_about
        seo_description_about
      }
    }
  `)
  const testimonials = data.allSanityReview.nodes

  return (
    <PageLayout>
      <SEO
        page={{
          title: data.sanityCleaning.seo_title_about,
          description: data.sanityCleaning.seo_description_about,
          path: "https://tiptopservices.com.au/cleaners/about",
        }}
      />
      <Banner
        bg={data.sanityCleaning.about_banner.asset.fluid}
        header={<Heading>About us</Heading>}
      />
      <Container my={[3, 4, 5]}>
        <Box
          sx={{ display: "grid", gridGap: "2" }}
          maxWidth="69ch"
          py={[2, 3, 4]}
        >
          <BlockContent
            blocks={data.sanityCleaning.about_content}
          ></BlockContent>
          <ActionBtns />
        </Box>
      </Container>
      <Box bg="lighter" py={[4, 5, 6]} my={[1, 2, 3]}>
        <Container>
          <Heading as="h3" fontSize={[2, 3, 3]}>
            {data.sanityCleaning.customer_review_heading}
          </Heading>

          <Testimonials testimonials={testimonials} />
        </Container>
      </Box>
    </PageLayout>
  )
}
