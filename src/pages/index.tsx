import React from "react"
import GlobalLayout from "../layouts/global"
import Rellax from "../assets/images/rellax.svg"
import { Image, Heading, Text, Button, Box } from "rebass"
export default () => {
  return (
    <GlobalLayout>
      <Image src={Rellax} alt="woman rellaxing in a house" />
      <Heading fontFamily="heading" size="sm">
        Remember when you could relax in your own home without worrying about
        pests?
      </Heading>
      <Text lineHeight="tall">
        Let our team of trained professionals help you go back to that time.
      </Text>
      <Text lineHeight="tall">
        Take back your home with Tiptop pest control.{" "}
        <Text as="strong">Before it’s too Late</Text>.
      </Text>

      <Box>
        <Button variantColor="primary">Get a free quote</Button>
        <Button variantColor="light">+61 425 006 900</Button>
      </Box>
    </GlobalLayout>
  )
}
