module.exports = {
  siteMetadata: {
    title: `American Swiss Foundation`,
    description: `A non-profit, private organization, created in 1945, the Foundation seeks to preserve and strengthen the historic friendship between the United States and Switzerland.`,
    author: `americaneagle.com`,
  },
  plugins: [
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        deliveryClientConfig: {
          projectId: `ab77c37d-55d0-006d-648a-a2f8a62d4bc0`, // Fill in your Project ID
        },
        // Please note that with the Sample Project generated above, `en-US` is the default language for the project and this config. For a blank project, this needs to be `default`.
        languageCodenames: [
          `default`, // Or the languages in your project (Project settings -> Localization)
        ],
      },
    },
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
        name: `American Swiss Foundation`,
        short_name: `American Swiss`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
