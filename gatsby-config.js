require("dotenv").config({
  path: ".env",
})
module.exports = {
  siteMetadata: {
    // sitemap plugin needs this
    siteUrl: `https://tiptopservices.com.au`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-transition-link`,
      // options: {
      //   layout: require.resolve("./src/layouts/pageLayout.tsx"),
      // },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "tjzgdjfn",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-130491215-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
