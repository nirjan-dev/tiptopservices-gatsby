import React from "react"

import GlobalLayout from "../layouts/global"
import Rellax from "../assets/images/rellax.svg"
import { Image, Heading, Text } from "rebass"
import Stack from "stack-styled/emotion/Stack"
import Container from "../components/container"

export default () => {
  return (
    <GlobalLayout>
      <Container>
        <Stack gridGap={3}>
          <Image src={Rellax} alt="woman rellaxing in a house" />
          <Heading fontSize={[3, 4, 5, 6]}>
            Remember when you could relax in your own home without worrying
            about pests?
          </Heading>

          <Stack gridGap={1}>
            <Text>
              Let our team of trained professionals help you go back to that
              time.
            </Text>
            <Text>
              Take back your home with Tiptop pest control.
              <Text as="strong">Before it’s too Late</Text>.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </GlobalLayout>
  )
}
