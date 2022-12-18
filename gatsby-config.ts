import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `AThumbLog`,
    description: `Happy A-Thumb Day 🤍`,
    author: `@athumb`,
    siteUrl: `https://athumblog.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `AThumb Log - Dev & Life`,
        short_name: `athumblog`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/ghost.png`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        theme_color: `#ffffff`,
      },
    },
  ],
}

export default config
