import React from "react"
import { graphql } from "gatsby"
import PageLayout from "./pageLayout"
import Banner from "../components/banner"
import { Heading } from "rebass"
import Container from "../components/container"
import BlockContent from "@sanity/block-content-to-react"
import ActionBtns from "../components/actionBtns"
import { Box } from "reflexbox"
import SEO from "../components/seo"
export default ({ data }) => {
  const service = data.sanityService
  return (
    <PageLayout>
      <SEO
        page={{
          title: `${service.title} | Tiptop Pest Control`,
          description: service.body[0].children[0].text,
          path:
            "https://tiptopservices.com.au/pestcontrol/services/" +
            service.slug.current,
          image: service.image.asset.fluid.src,
        }}
      />
      <Banner bg={service.image.asset.fluid} />
      <Container my={[4, 5, 6]}>
        <Box
          sx={{
            maxWidth: "65ch",
            margin: "0 auto",
          }}
        >
          <Heading>{service.title}</Heading>
          <BlockContent blocks={service.body}></BlockContent>
          <ActionBtns />
        </Box>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query($id: String) {
    sanityService(id: { eq: $id }) {
      title
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      body: _rawDescription
      slug {
        current
      }
    }
  }
`
