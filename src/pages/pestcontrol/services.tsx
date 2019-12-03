import React from "react"
import PageLayout from "../../layouts/pageLayout"
import { Heading } from "rebass"
import Container from "../../components/container"
import ServicesGrid from "../../components/servicesGrid"
import Millipede from "../../assets/images/millipede.jpg"
import Bedbug from "../../assets/images/bedbug.jpg"
import cockroach from "../../assets/images/cockroach.jpg"
import rat from "../../assets/images/rat.jpg"
import ActionBtns from "../../components/actionBtns"
import { Box } from "rebass"
import { graphql, useStaticQuery } from "gatsby"
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
    }
  `)
  const services = data.allSanityService.nodes.map(node => {
    return {
      title: node.title,
      link: node.slug.current,
      image: node.image.asset.fluid,
    }
  })
  console.log(services)
  return (
    <PageLayout>
      <Container my={2}>
        <Box
          sx={{
            display: "grid",
            gridGap: [3, 4, 5],
          }}
        >
          <Heading>Our Services</Heading>
          <ServicesGrid services={services} />
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
