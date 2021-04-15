<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Project 12E: Serverless JAMstack Virtual Lolly App With Gatsby, Storybook, FaunaDB, GraphQL, Netlify Functions, and TypeScript
</h1>

### Link to Web App

The web app has been deployed to Netlify, and can be accessed [here](https://virtual-lolly-p12e.netlify.app/), and the Storybook of the components can be accessed [here](https://virtual-lolly-storybook-p12e.netlify.app/).

### Features

The following are some of the features of this project:

- A form for creating a new Lolly at "/create-new" using [Formik](https://formik.org/docs/overview) and [Yup](https://github.com/jquense/yup)
- Uses [FaunaDB](https://fauna.com/) to store the information about all the lollipops
- A GraphQL API deployed as a Netlify function at "/new" to interact with FaunaDB
- All lollies are fetched and static pages are built for each one at build time.
- A Netlify function (showLolly) as an SSR fallback: all lollies not having a static page are redirected to this function.
- The project is built using the Component Driven Development (CDD) approach with [Storybook](https://storybook.js.org/)
- The Storybook is also built and deployed [here](https://virtual-lolly-storybook-p12e.netlify.app/).
- Demonstrates CRUD operations using FaunDB through the GraphQL API
- Bootstrapped with [GatsbyJS](https://www.gatsbyjs.com/)
- Additionally, includes TypeScript support for gatsby-config, gatsby-node, gatsby-browser and gatsby-ssr files
- Site hosted on [Netlify](https://www.netlify.com/)
- CI/CD with Netlify
- CI/CD for Storybook is handled with Github Actions.
- Completely typed with TypeScript
- Completely interactive and responsive design with vanilla CSS.
