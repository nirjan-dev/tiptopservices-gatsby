import React from "react"

import GlobalLayout from "../layouts/global"
import Banner from "../components/banner"
import exterminator from "../assets/images/exterminator.jpg"
import { Heading, Text, Box } from "rebass"
import Stack from "stack-styled/emotion/Stack"
import Container from "../components/container"
import Testimonials from "../components/testimonials"
export default () => {
  const testimonials = [
    {
      quote: "Very prompt and the task was completed to a very high standard",
      name: "Tim Davies",
      location: "Oak Park",
    },
    {
      quote:
        "“Amazing service, very professional, punctual, polite. Highly recommended.”",
      name: "Swe V.",
      location: "Glenroy",
    },
    {
      quote: "They have a friendly team and arrived in time",
      name: "Jonny Ive",
      location: "Moonee Ponds",
    },
  ]
  return (
    <GlobalLayout>
      <Banner bg={exterminator} header={<Heading>About us</Heading>} />
      <Container my={2}>
        <Stack gridGap={2} maxWidth="80ch" py={[2, 3, 4]}>
          <Text>
            We are a pest control company based in Melbourne, Australia. We have
            been providing as the name suggests tip top service for our
            customers for almost 10 years. We take pride in
            <ol>
              <li>
                Responding to client enquires in the quickest time possible
              </li>
              <li>Only using the best and safest chemicals </li>
              <li>Customer satisfaction guarenteed</li>
            </ol>
          </Text>
        </Stack>
      </Container>
      <Box bg="lighter" py="3">
        <Container>
          <Heading as="h3" fontSize={[2, 3, 4]}>
            Don’t just take our word for it. Hear from our customers.
          </Heading>

          <Testimonials testimonials={testimonials} />
        </Container>
      </Box>
    </GlobalLayout>
  )
}
