import React from "react"
import { IoIosInformationCircle, IoIosMail, IoIosList } from "react-icons/io"
import { Image, Flex, Box } from "rebass"
import styled from "../components/styled"
import Logo from "../assets/images/tiptop2.png"
import { Link } from "gatsby"
const StyledNav = styled.nav`
  .nav-icon {
    width: 2rem;
    height: 2rem;
  }

  .nav {
    list-style-type: none;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: ${props => props.theme.colors.bg};
  }

  .nav-item {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.gray};
    text-decoration: none;
    font-family: ${props => props.theme.fonts.heading};

    &.active,
    &:hover,
    &:active {
      color: ${props => props.theme.colors.primary};
    }
  }
`

function Nav({ onOpenClick }) {
  return (
    <StyledNav role="navigation">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p={[0, 0, 3]}
        sx={{
          maxWidth: ["100%", "100%", "92%"],
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: ["none", "none", "block"],
          }}
        >
          <Image
            src={Logo}
            sx={{
              maxWidth: "4.8rem",
              height: "auto",
            }}
          />
        </Box>

        <Flex
          flex="0.6"
          className="nav"
          as="ul"
          padding="3"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            position: ["fixed", "fixed", "static"],
            boxShadow: ["nav", "nav", "none"],
          }}
        >
          <Box as="li">
            <Link to="/" className="nav-item active">
              <Image
                sx={{
                  display: ["block", "block", "none"],
                }}
                img
                className="nav-icon"
                src={Logo}
                alt="tiptop pest control"
              />

              <span>Home</span>
            </Link>
          </Box>
          <Box>
            <Link to="about" className="nav-item">
              <Box
                sx={{
                  display: ["block", "block", "none"],
                }}
                as={IoIosInformationCircle}
                className="nav-icon"
              />
              <span>Why us?</span>
            </Link>
          </Box>
          <Box as="li">
            <Link to="services" className="nav-item">
              <Box
                sx={{
                  display: ["block", "block", "none"],
                }}
                as={IoIosList}
                className="nav-icon"
              />

              <span>Services</span>
            </Link>
          </Box>
          <Box as="li">
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                onOpenClick()
              }}
              className="nav-item"
            >
              <Box
                sx={{
                  display: ["block", "block", "none"],
                }}
                as={IoIosMail}
                className="nav-icon"
              />

              <span>Contact</span>
            </a>
          </Box>
        </Flex>
      </Flex>
    </StyledNav>
  )
}

export default Nav
