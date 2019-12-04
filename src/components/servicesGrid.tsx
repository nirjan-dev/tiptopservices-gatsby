import React from "react"
import { Flex, Text, Box, Heading, Link } from "rebass"
import styled from "./styled"
import BackgroundImage from "gatsby-background-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { customTheme } from "../theme"
import GatsbyImg from "gatsby-image"
function ServicesGrid({ services }) {
  const theme = customTheme
  const StyledImg = styled(GatsbyImg)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `
  return (
    <Flex flexWrap="wrap">
      {services.map(service => {
        return (
          <Box
            key={service.link}
            my={3}
            width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]}
            px={[2, 3, 4]}
            sx={{
              position: "relative",
              transition: "transform 200ms ease-in",
              ":hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <AniLink
              to={`pestcontrol/services/${service.link}`}
              paintDrop
              hex={theme["colors"].primaryLight}
            >
              <GatsbyImg
                imgStyle={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.6)",
                  borderRadius: "5%",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                fluid={service.image}
              />
              <Box
                as="span"
                textAlign="center"
                sx={{
                  position: "absolute",
                  bottom: "3",
                  left: "6",
                  color: "light",
                }}
              >
                {service.title}
              </Box>
            </AniLink>
          </Box>
        )
      })}
    </Flex>
  )
}

export default ServicesGrid
