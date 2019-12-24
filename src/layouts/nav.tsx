import React from "react"
import { IoIosInformationCircle, IoIosMail, IoIosList } from "react-icons/io"
import { Image, Flex, Box } from "rebass"
import styled from "../components/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import GatsbyImg from "gatsby-image"
import { customTheme } from "../theme"
const StyledNav = styled.nav`
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: ${props => props.theme["colors"].bg};
  .nav-icon {
    width: 2rem;
    height: 2rem;
  }

  .nav {
    list-style-type: none;
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

function Nav({ onOpenClick, type }) {
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
      sanityCleaning {
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

  const pestLogo = data.sanityPestcontrol.logo.asset.fluid
  const cleanLogo = data.sanityCleaning.logo.asset.fluid
  return (
    <TransitionPortal
      style={{
        width: "100%",
      }}
    >
      <Box
        as={StyledNav}
        role="navigation"
        sx={{
          position: ["fixed", "fixed", "static"],
          boxShadow: ["nav", "nav", "none"],
        }}
      >
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
            <GatsbyImg fluid={type === "pestcontrol" ? pestLogo : cleanLogo} />
          </Box>

          <Flex
            maxWidth="800px"
            width="100%"
            className="nav"
            as="ul"
            padding="3"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box as="li">
              <AniLink
                activeClassName="active"
                hex={theme["colors"].primaryLight}
                paintDrip
                to={`/${type}`}
                className="nav-item"
              >
                <Box
                  sx={{
                    display: ["block", "block", "none"],
                  }}
                  as="span"
                >
                  <GatsbyImg
                    fluid={type === "pestcontrol" ? pestLogo : cleanLogo}
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
                to={`/${type}/about`}
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
                to={`/${type}/services`}
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
              <AniLink
              activeClassName="active"
                to={`/${type}/contact`}
                href="#"
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
              </AniLink>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </TransitionPortal>
  )
}

export default Nav
