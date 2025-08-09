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
          // `gatsby-remark-prismjs`,
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 530,
            },
          },
          `gatsby-remark-reading-time`,
          `gatsby-remark-embed-spotify`,
          `gatsby-remark-responsive-iframe`,          
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
            name: `News Cycle`,
            file: `https://fonts.googleapis.com/css2?family=News+Cycle:wght@400;700&display=swap`,
          },
          {
            name: `Newsreader`,            
            file: `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap`,
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
      "path": "./src/assets/",
    },
    __key: "assets"
  }]
};