import React from "react"
import {
  IoIosInformationCircle,
  IoIosGrid,
  IoIosMail,
  IoIosApps,
  IoIosList,
} from "react-icons/io"
import { Image, Flex, Box } from "rebass"
import styled from "@emotion/styled"
import Logo from "../assets/images/tiptop2.png"
const StyledNav = styled.nav`
  .nav-icon {
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
  }

  .nav {
    list-style-type: none;
  }

  .nav-item {
    text-align: center;
    display: block;
    color: ${props => props.theme.colors.gray["500"]};
    text-decoration: none;
  }
`

function Nav() {
  return (
    <StyledNav role="navigation">
      <Image display={["none", "block"]} src="https://gradientjoy.com/200" />

      <Flex
        boxShadow="0px -4px 10px rgba(0, 0, 0, 0.1)"
        className="nav"
        as="ul"
        padding="3"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Box as="li">
          <a href="#" className="nav-item">
            <img className="nav-icon" src={Logo} alt="tiptop pest control" />
            <span>Home</span>
          </a>
        </Box>
        <Box>
          <a href="#" className="nav-item">
            <IoIosInformationCircle className="nav-icon" />
            <span>Why us?</span>
          </a>
        </Box>
        <Box as="li">
          <a href="#" className="nav-item">
            <IoIosList className="nav-icon" />

            <span>Services</span>
          </a>
        </Box>
        <Box as="li">
          <a href="#" className="nav-item">
            <IoIosMail className="nav-icon" />

            <span>Contact</span>
          </a>
        </Box>
      </Flex>
    </StyledNav>
  )
}

export default Nav
