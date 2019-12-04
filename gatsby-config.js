require("dotenv").config({
  path: ".env",
})
module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-transition-link`,
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
  ],
}
