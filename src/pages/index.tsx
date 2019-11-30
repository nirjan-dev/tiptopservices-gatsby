import React from "react"

import GlobalLayout from "../layouts/global"
import Rellax from "../assets/images/rellax.svg"
import { Image, Heading, Text, Box, Flex } from "rebass"
import Container from "../components/container"
import ActionBtns from "../components/actionBtns"

export default () => {
  return (
    <GlobalLayout>
      <Container my={[1, 2, 4]}>
        <Flex
          sx={{
            flexWrap: ["wrap", "wrap", "nowrap"],
          }}
        >
          <Box my={2} mx={3} order={[0, 0, 1]} width={1}>
            <Image src={Rellax} alt="woman rellaxing in a house" />
          </Box>

          <Box width={[1, 1, 0.8]}>
            <Heading fontSize={[3, 3, 4]}>
              Remember when you could relax in your own home without worrying
              about pests?
            </Heading>

            <Box my={[4, 5, 6]}>
              <Text>
                Let our team of trained professionals help you go back to that
                time.
              </Text>
              <Text>
                Take back your home with Tiptop pest control.
                <br />
                <Text as="strong">Before it’s too Late</Text>.
              </Text>
            </Box>
            <ActionBtns />
          </Box>
        </Flex>
      </Container>
    </GlobalLayout>
  )
}
