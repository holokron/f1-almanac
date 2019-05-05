module.exports = {
  siteMetadata: {
    title: `Formula 1 Almanac`,
    description: `Formula 1 Almanac`,
    keywords: `f1 formula 1 statistics almanac database`,
    author: `Holokron <michalv8@gmail.com>`,
    keywords: `f1 formula 1 statistics almanac`,
    version: "0.3.1",
    copyright: "2019",
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
        name: "races",
        path: `./data/races`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "standings",
        path: `./data/standings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "driversPerSeason",
        path: `./data/driversPerSeason`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "constructorsPerSeason",
        path: `./data/constructorsPerSeason`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "seasons",
        path: `./data/seasons`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: false,
      },
    },
  ],
}
