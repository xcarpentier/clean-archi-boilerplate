module.exports = {
  siteMetadata: {
    title: `TBD`,
    description: `TBD`,
    author: `@xcapetir`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans:400,600'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'TBD',
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-native-web`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
