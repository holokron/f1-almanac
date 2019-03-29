module.exports = {
  siteMetadata: {
    title: `Formula 1 Almanac`,
    description: `Formula 1 Almanac`,
    author: `Holokron <michalv8@gmail.com>`,
    keywords: `f1 formula 1 statistics `,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Formula 1 Almanac`,
        short_name: `F1 Almanac`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#001529`,
        display: `standalone`,
        icon: `static/logo.png`,
        include_favicon: true,
      },
    },
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
    },
  ],
}
