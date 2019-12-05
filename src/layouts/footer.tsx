import React from "react"
import Container from "../components/container"
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io"
import { Flex, Box, Link } from "rebass"
import { useStaticQuery, graphql } from "gatsby"
function Footer({ type }) {
  const data = useStaticQuery(graphql`
    {
      sanityPestcontrol {
        facebook_link
        twitter_link
        instagram_link
      }
      sanityCleaning {
        facebook_link
        twitter_link
        instagram_link
      }
    }
  `)
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer style={{ marginBottom: "15vh" }}>
      <Container py={1}>
        <Box
          sx={{
            display: "grid",
            gridGap: "1",
          }}
          mt={2}
          justifyContent="center"
        >
          <Flex
            fontSize={[3, 4, 5]}
            justifyContent="center"
            as="ul"
            sx={{ listStyleType: "none", padding: "0" }}
          >
            <Box mr={3} as="li">
              <Link
                href={
                  type === "pestcontrol"
                    ? data.sanityPestcontrol.facebook_link
                    : data.sanityCleaning.facebook_link
                }
                target="_blank"
                rel="noopener"
              >
                <IoLogoFacebook />
              </Link>
            </Box>
            <Box mr={3} as="li">
              <Link
                href={
                  type === "pestcontrol"
                    ? data.sanityPestcontrol.twitter_link
                    : data.sanityCleaning.twitter_link
                }
                target="_blank"
                rel="noopener"
              >
                <IoLogoTwitter />
              </Link>
            </Box>
            <Box mr={3} as="li">
              <Link
                href={
                  type === "pestcontrol"
                    ? data.sanityPestcontrol.instagram_link
                    : data.sanityCleaning.instagram_link
                }
                target="_blank"
                rel="noopener"
              >
                <IoLogoInstagram />
              </Link>
            </Box>
          </Flex>

          <small>{year} &copy; Tiptop Services</small>

          <small>
            Site by:
            <Link
              href="https://www.studiodagger.com"
              target="_blank"
              rel="noopener"
            >
              Studiodagger
            </Link>
          </small>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer
