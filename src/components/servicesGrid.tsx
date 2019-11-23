import React from "react"
import { Flex, Text, Box, Heading, Link } from "rebass"
function ServicesGrid({ services }) {
  return (
    <Flex flexWrap="wrap">
      {services.map(service => {
        return (
          <Box my={2} width={1 / 2} px={2}>
            <Box
              sx={{
                background: `linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 45%),url(${service.image})`,
                backgroundSize: "cover",
                borderRadius: 8,
                color: "white",
                height: "20vh",
                position: "relative",
              }}
            >
              <Link
                href={service.link}
                textAlign="center"
                sx={{
                  position: "absolute",
                  bottom: "2",
                  left: "2",
                  color: "light",
                  textDecoration: "none",
                }}
              >
                {service.title}
              </Link>
            </Box>
          </Box>
        )
      })}
    </Flex>
  )
}

export default ServicesGrid
