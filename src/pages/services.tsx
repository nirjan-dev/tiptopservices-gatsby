import React from "react"

import GlobalLayout from "../layouts/global"
import Banner from "../components/banner"
import exterminator from "../assets/images/exterminator.jpg"
import { Heading, Text } from "rebass"
import Stack from "stack-styled/emotion/Stack"
import Container from "../components/container"
import ServicesGrid from "../components/servicesGrid"
import Millipede from "../assets/images/millipede.jpg"
import Bedbug from "../assets/images/bedbug.jpg"
import cockroach from "../assets/images/cockroach.jpg"
import rat from "../assets/images/rat.jpg"
export default () => {
  const services = [
    {
      title: "Cockroach",
      image: cockroach,
      link: "#",
    },
    {
      title: "Bedbugs",
      image: Bedbug,
      link: "#",
    },
    {
      title: "Millipede",
      image: Millipede,
      link: "#",
    },
    {
      title: "Rats",
      image: rat,
      link: "#",
    },
  ]
  return (
    <GlobalLayout>
      <Container my={2}>
        <Heading>Our Services</Heading>
        <ServicesGrid services={services} />
      </Container>
    </GlobalLayout>
  )
}
