module.exports = {
  siteMetadata: {
    title: `Formula 1 Almanac`,
    description: `Formula 1 Almanac`,
    author: `michalv8@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-svg`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`
      },
    }
  ],
}
