import React from "react"
import PageLayout from "../../layouts/pageLayout"
import { Image, Heading, Text, Box, Flex } from "rebass"
import Container from "../../components/container"
import ActionBtns from "../../components/actionBtns"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImg from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import SEO from "../../components/seo"

export default () => {
  const data = useStaticQuery(graphql`
    {
      sanityCleaning {
        heading
        main_bg {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        subHeading: _rawSubHeading
        seo_title
        seo_description
      }
    }
  `)
  return (
    <PageLayout type="cleaners">
      <SEO
        page={{
          title: data.sanityCleaning.seo_title,
          description: data.sanityCleaning.seo_description,
          path: "./cleaners",
        }}
      />
      <Container my={[1, 2, 4]}>
        <Flex
          sx={{
            flexWrap: ["wrap", "wrap", "nowrap"],
          }}
        >
          <Box my={2} mx={3} order={[0, 0, 1]} width={1}>
            <GatsbyImg
              fluid={data.sanityCleaning.main_bg.asset.fluid}
              alt="woman rellaxing in a house"
            />
          </Box>

          <Box width={[1, 1, 0.8]}>
            <Heading fontSize={[3, 3, 4]}>
              {data.sanityCleaning.heading}
            </Heading>

            <Box my={[4, 5, 6]}>
              <BlockContent
                blocks={data.sanityCleaning.subHeading}
              ></BlockContent>
            </Box>
            <ActionBtns />
          </Box>
        </Flex>
      </Container>
    </PageLayout>
  )
}
