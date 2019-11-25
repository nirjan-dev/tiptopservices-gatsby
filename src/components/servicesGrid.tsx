import React from "react"
import { Flex, Text, Box, Heading, Link } from "rebass"
function ServicesGrid({ services }) {
  return (
    <Flex flexWrap="wrap">
      {services.map(service => {
        return (
          <Box my={2} width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]} px={2}>
            <Box
              as={Link}
              href={service.link}
              sx={{
                background: `linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 45%),url(${service.image})`,
                backgroundSize: "cover",
                borderRadius: 8,
                color: "white",
                height: "20vh",
                position: "relative",
                display: "block",
              }}
            >
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
