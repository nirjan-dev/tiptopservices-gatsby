import React from "react"

import GlobalLayout from "../layouts/global"
import Banner from "../components/banner"
import exterminator from "../assets/images/exterminator.jpg"
import { Heading, Text } from "rebass"
import Stack from "stack-styled/emotion/Stack"
import Container from "../components/container"
export default () => {
  return (
    <GlobalLayout>
      <Banner bg={exterminator} header={<Heading>About us</Heading>} />
      <Container my={2}>
        <Stack gridGap={2}>
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
    </GlobalLayout>
  )
}
