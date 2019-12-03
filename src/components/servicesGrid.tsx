import React from "react"
import { Flex, Text, Box, Heading, Link } from "rebass"
import styled from "./styled"
import BackgroundImage from "gatsby-background-image"
function ServicesGrid({ services }) {
  const StyledBackgroundImage = styled(BackgroundImage)``
  return (
    <Flex flexWrap="wrap">
      {services.map(service => {
        return (
          <Box
            key={service.link}
            my={2}
            width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]}
            px={[2, 3, 4]}
            sx={{
              overflow: "hidden",
            }}
          >
            <Box as={Link} href={service.link} sx={{}}>
              <Box
                as="span"
                textAlign="center"
                sx={{
                  position: "absolute",
                  bottom: "2",
                  left: "2",
                  color: "light",
                }}
              >
                {service.title}
              </Box>
            </Box>
          </Box>
        )
      })}
    </Flex>
  )
}

export default ServicesGrid
