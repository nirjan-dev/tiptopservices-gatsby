import React from "react"
import PageLayout from "../../layouts/pageLayout"
import { Heading } from "rebass"
import Container from "../../components/container"
import ServicesGrid from "../../components/servicesGrid"
import ActionBtns from "../../components/actionBtns"
import { Box } from "rebass"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../../components/seo"
export default () => {
  const data = useStaticQuery(graphql`
    {
      allSanityService(filter: { service_type: { eq: "Pest Control" } }) {
        nodes {
          title
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      sanityPestcontrol {
        seo_title_services
        seo_description_services
      }
    }
  `)
  const services = data.allSanityService.nodes.map(node => {
    return {
      title: node.title,
      link: node.slug.current,
      image: node.image.asset.fluid,
    }
  })

  return (
    <PageLayout type="pestcontrol">
      <SEO
        page={{
          title: data.sanityPestcontrol.seo_title_services,
          description: data.sanityPestcontrol.seo_description_services,
          path: "./pestcontrol/services",
        }}
      />
      <Container my={2}>
        <Box
          sx={{
            display: "grid",
            gridGap: [3, 4, 5],
          }}
        >
          <Heading>Our Services</Heading>
          <ServicesGrid services={services} type="pestcontrol" />
          <Box
            sx={{
              maxWidth: "60ch",
            }}
          >
            <ActionBtns />
          </Box>
        </Box>
      </Container>
    </PageLayout>
  )
}
