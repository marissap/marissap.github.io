/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Marissa Phul`,
    author: {
      summary: `I think in systems but build for people by transforming abstract concepts into human-centred applications.`,
    },
    description: `portfolio and blog.`,
    siteUrl: `http://marissa.digital/`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: `blog`,
      },
      __key: "blog"
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 590,
          //   },
          // },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // `gatsby-remark-prismjs`,
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
          `gatsby-remark-embed-spotify`,
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Jura`,
            file: `https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap`,
          },
          {
            name: `News Cycle`,
            file: `https://fonts.googleapis.com/css2?family=News+Cycle:wght@400;700&display=swap`,
          },
          {
            name: `Edu AU VIC WA NT Hand`,
            file: `https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&display=swap`,
          },
          {
            name: `Catamaran`,
            file: `https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&display=swap`,
          },
        ],
      },
    },
    "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/favicon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "assets",
      "path": "./src/assets/"
    },
    __key: "assets"
  }]
};