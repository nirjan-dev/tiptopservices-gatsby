import React from "react"
import styled from "../components/styled"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import GlobalLayout from "../layouts/global"
import { Flex } from "rebass"
import { useTheme } from "emotion-theming"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { customTheme } from "../theme"
import SEO from "../components/seo"
const StyledBackgroundImage = styled(BackgroundImage)`
  ::before,
  ::after {
    background-blend-mode: multiply;
  }
`
const HomeConatiner = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  .tiptop-page {
    width: 50vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    background-blend-mode: overlay;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .tiptop-page h1 {
    font-size: 3rem;
    font-weight: 500;
  }

  .visit-site-btn {
    color: #fff;
    text-decoration: none;
    border: 3px solid #fff;
    width: 10rem;
    display: inline-block;
    padding: 0.5rem 0rem;

    transition: box-shadow 0.4s;
  }

  .visit-site-btn:hover {
    -webkit-box-shadow: inset 10rem 0 #fff;
    box-shadow: inset 10rem 0 #fff;
    color: #333;
  }

  @media screen and (max-width: 1050px) {
    .tiptop-page h1 {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 630px) {
    .tiptop-page {
      width: 100vw;
      height: 50vh;
    }
  }
`
function Home() {
  const data = useStaticQuery(graphql`
    {
      sanityHome {
        cleaners_image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        pestcontrol_image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        cleaners_title
        pestcontrol_title
      }
    }
  `)
  const theme = customTheme
  return (
    <GlobalLayout>
      <SEO page={{}} />
      <HomeConatiner>
        <StyledBackgroundImage
          backgroundColor={`rgba(0,0,0,0.6)`}
          fluid={data.sanityHome.cleaners_image.asset.fluid}
          className="cleaning-page tiptop-page"
        >
          <div className="page-info">
            <h2>{data.sanityHome.cleaners_title}</h2>
            <AniLink
              paintDrip
              hex={theme.colors.primaryLight}
              to="/cleaning"
              className="visit-site-btn"
            >
              Visit Site
            </AniLink>
          </div>
        </StyledBackgroundImage>
        <StyledBackgroundImage
          fluid={data.sanityHome.pestcontrol_image.asset.fluid}
          className="pest-control-page tiptop-page"
          backgroundColor={`rgba(0,0,0,0.6)`}
        >
          <div className="page-info">
            <h2>{data.sanityHome.pestcontrol_title}</h2>
            <AniLink
              paintDrip
              hex={theme.colors.primaryLight}
              to="/pestcontrol"
              className="visit-site-btn"
            >
              Visit Site
            </AniLink>
          </div>
        </StyledBackgroundImage>
      </HomeConatiner>
    </GlobalLayout>
  )
}

export default Home
