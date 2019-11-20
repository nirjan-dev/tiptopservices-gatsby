import React from "react"
import { IoIosInformationCircle, IoIosMail, IoIosList } from "react-icons/io"
import { Image, Flex, Box } from "rebass"
import styled from "../components/styled"
import Logo from "../assets/images/tiptop2.png"
const StyledNav = styled.nav`
  .nav-icon {
    width: 2rem;
    height: 2rem;
  }

  .nav {
    list-style-type: none;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

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
      <Image display={["none", "block"]} src={Logo} />

      <Flex
        className="nav"
        as="ul"
        padding="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box as="li">
          <a href="#" className="nav-item active">
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
          <a
            href="#"
            onClick={e => {
              e.preventDefault()
              onOpenClick()
            }}
            className="nav-item"
          >
            <IoIosMail className="nav-icon" />

            <span>Contact</span>
          </a>
        </Box>
      </Flex>
    </StyledNav>
  )
}

export default Nav
