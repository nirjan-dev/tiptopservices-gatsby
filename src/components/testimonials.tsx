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
    slidesToShow: 3,
    adaptiveHeight: true,
    swipeToSlide: true,
    draggable: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: false,
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
                  <Text as="blockquote">{testimonial.quote}</Text>
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
