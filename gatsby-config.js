module.exports = {
  siteMetadata: {
    title: `Ben Langham`,
    description: `Hi, I'm Ben. I'm a freelance web developer and digital artist.`,
    author: `Ben Langham`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `pmtwi298`,
        dataset: `production`,
        graphqlTag: "default",
        overlayDrafts: true,
        watchMode: true,
        token:
          "skYVdMf8vSUHEDzSHNvhHnAlCJaHousVhWfOptv0aTyFJ6C0mIQpeH83YbiegXULW0NqP10zYbxab6pEWfOQc1vvoP0YORdla3lrlQnIvaZhXYuURyZJgEj8YJBiZWm6CmNLl7B62wo2BQiQsDjGd0NFSiBLKaMbHbHOAqB4rb8z9iQ74DIa",
      },
    },
    `gatsby-plugin-sass`,
  ],
}
