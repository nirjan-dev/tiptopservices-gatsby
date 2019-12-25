require("dotenv").config({
  path: ".env",
})
module.exports = {
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
  ],
}
