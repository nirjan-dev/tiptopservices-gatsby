import React from "react"
import { IoIosInformationCircle, IoIosMail, IoIosList } from "react-icons/io"
import { Image, Flex, Box } from "rebass"
import styled from "../components/styled"
import Logo from "../assets/images/tiptop2.png"
import { Link, useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import GatsbyImg from "gatsby-image"
import { useTheme } from "emotion-theming"
import { customThemeType, customTheme } from "../theme"
import css from "@emotion/css"
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
    background: ${props => props.theme["colors"].bg};
  }

  .nav-item {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme["colors"].gray};
    text-decoration: none;
    font-family: ${props => props.theme["fonts"].heading};

    &.active,
    &:hover,
    &:active {
      color: ${props => props.theme["colors"].primary};
    }
  }
`

function Nav({ onOpenClick }) {
  const theme = customTheme
  const data = useStaticQuery(graphql`
    {
      sanityPestcontrol {
        logo {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)

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
            minWidth: "4rem",
          }}
        >
          <GatsbyImg fluid={data.sanityPestcontrol.logo.asset.fluid} />
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
            <AniLink
              activeClassName="active"
              hex={theme["colors"].primaryLight}
              paintDrip
              to="/pestcontrol"
              className="nav-item"
            >
              <Box
                sx={{
                  display: ["block", "block", "none"],
                }}
                as="span"
              >
                <GatsbyImg
                  fluid={data.sanityPestcontrol.logo.asset.fluid}
                  className="nav-icon"
                  alt="tiptop pest control"
                />
              </Box>

              <span>Home</span>
            </AniLink>
          </Box>
          <Box>
            <AniLink
              activeClassName="active"
              hex={theme["colors"].primaryLight}
              paintDrip
              to="/pestcontrol/about"
              className="nav-item"
            >
              <Box
                sx={{
                  display: ["block", "block", "none"],
                }}
                as={IoIosInformationCircle}
                className="nav-icon"
              />
              <span>Why us?</span>
            </AniLink>
          </Box>
          <Box as="li">
            <AniLink
              activeClassName="active"
              hex={theme["colors"].primaryLight}
              paintDrip
              to="/pestcontrol/services"
              className="nav-item"
            >
              <Box
                sx={{
                  display: ["block", "block", "none"],
                }}
                as={IoIosList}
                className="nav-icon"
              />

              <span>Services</span>
            </AniLink>
          </Box>
          <Box as="li">
            <a
              role="button"
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
