import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
  page,
}: {
  page: {
    title?: string
    description?: string
    image?: string
    path?: string
  }
}) => {
  const data = useStaticQuery(graphql`
    {
      sanityHome {
        title: seo_title
        description: seo_description
      }
    }
  `)

  const defaults = data.sanityHome

  if (defaults.baseUrl === undefined && typeof window !== "undefined") {
    defaults.baseUrl = window.location.origin
  }

  const title = page.title || defaults.title
  const description = page.description || defaults.description
  const url: any = new URL(page.path || "", defaults.baseUrl)
  const image: any = page.image ? new URL(page.image, defaults.baseUrl) : false

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />

      <link
        href="https://fonts.googleapis.com/css?family=Lora|Montserrat&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  )
}

export default SEO
