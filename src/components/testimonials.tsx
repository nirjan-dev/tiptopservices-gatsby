import React from "react"
import { Box, Text } from "rebass"
import Stack from "stack-styled/emotion/Stack"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
function Testimonials({ testimonials }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    //centerPadding: "3rem",
    //centerMode: true,
    adaptiveHeight: true,
    //variableWidth: true,
  }
  return (
    <Box
      as="section"
      sx={{
        my: "3",
        pb: "5",
      }}
    >
      <Slider {...settings}>
        {testimonials.map(testimonial => {
          return (
            <Box
              sx={{
                p: "1",
              }}
            >
              <Box
                py="2"
                px="3"
                sx={{
                  boxShadow: "card",
                  borderRadius: "default",
                  backgroundColor: "bg",
                }}
              >
                <Stack
                  gridGap={2}
                  textAlign="center"
                  justifyContent="center"
                  as="article"
                >
                  <Text as="blockquote">{testimonial.quote}</Text>
                  <Text color="primary" fontWeight="bold" as="cite">
                    {testimonial.name}
                  </Text>
                  <Text as="small">{testimonial.location}</Text>
                </Stack>
              </Box>
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}

export default Testimonials
