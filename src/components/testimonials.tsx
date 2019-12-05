import React from "react"
import { Box, Text } from "rebass"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
function Testimonials({ testimonials }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    adaptiveHeight: true,
    swipeToSlide: true,
    draggable: true,

    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <Box
      as="section"
      sx={{
        my: [3, 4, 5],
        pb: "3",
      }}
    >
      <Slider {...settings}>
        {testimonials.map(testimonial => {
          return (
            <Box
              key={testimonial.name}
              sx={{
                p: "3",
                mb: "7",
              }}
            >
              <Box
                py="4"
                px="5"
                sx={{
                  boxShadow: "card",
                  borderRadius: "card",
                  backgroundColor: "bg",
                  cursor: "grab",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridGap: "2",
                  }}
                  textAlign="center"
                  justifyContent="center"
                  as="article"
                >
                  <Text as="blockquote">{testimonial.content}</Text>
                  <Text color="primary" fontWeight="bold" as="cite">
                    {testimonial.name}
                  </Text>
                  <Text as="small">{testimonial.location}</Text>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}

export default Testimonials
