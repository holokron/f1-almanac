module.exports = {
  siteMetadata: {
    title: `Formula 1 Almanac`,
    description: `Formula 1 Almanac`,
    author: `michalv8@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Formula 1 Almanac`,
        short_name: `Formula 1 Almanac`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
}
