import React from "react"
import PageLayout from "../../layouts/pageLayout"
import Banner from "../../components/banner"
import { Heading, Text, Box } from "rebass"
import Container from "../../components/container"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/seo"
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

      sanityPestcontrol {
        seo_title_about
        seo_description_about
      }
    }
  `)

  return (
    <PageLayout type="cleaners">
      <SEO
        page={{
          title: "Thanks for contacting us | Tiptop Pest Control",
          description: data.sanityPestcontrol.seo_description_about,
          path: "./pestcontrol/thanks",
        }}
      />
      <Banner
        bg={data.sanityPestcontrol.about_banner.asset.fluid}
        header={<Heading>Thanks for contacting us</Heading>}
      />
      <Container my={[3, 4, 5]}>
        <Text>We will get back to you as sson as possible.</Text>
      </Container>
    </PageLayout>
  )
}
