import { GatsbyConfig } from "gatsby";

export default {
  siteMetadata: {
    title: `Virtual Lolly App`,
    description: `A Serverless JAMstack Virtual Lolly App with Gatsby, Netlify, FaunaDB, GraphQL and TypeScript.`,
    author: {
      name: `Mian Muhammad Sharjeel Safdar`,
      email: `miansharjeelsafdar@gmail.com`,
      github: `https://github.com/SharjeelSafdar/`,
    },
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: "LOLLY",
    //     fieldName: "lolly",
    //     url:
    //       "https://virtual-lolly-p12e.netlify.app/.netlify/functions/graphql-fauna",
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../images`,
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
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
} as GatsbyConfig;
