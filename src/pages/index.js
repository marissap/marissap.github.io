import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Quote from "../components/quote"
// import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {

  const post = data.allMarkdownRemark.edges

  return (
    <html lang="en" className="home">
      <Quote/>
      <Layout location={location} title="{siteTitle}">
        {/* <SEO title="Marissa Phul" keywords={[`blog`, `software engineer`]}/> */}        
        <div class="container">          
          <div class="box b">
            <p className="summary">I believe we can create any <span className="world">world</span> we want.<br></br>I work on systems, products, and ideas that embody this spirit of <span className="progress">progress</span> and <span className="creativity">creativity</span>.</p>
          </div>
          <div class="box d">
            <h1 className="title">Marissa Phul</h1> 
          </div>
          <div class="box e">
            <p className="about">
              Creative technologist based in Brooklyn, NY.
              <br></br>
              <br></br>
              I care about making life beautiful through the infrastructure that runs the world. Both the networks that connect us digitally and the physical components that facilitate everyday life. I am driven to interdisciplinary work that bridges the gaps between strategy, innovation, and implementation.
              <br></br>
              <br></br>
              Currently at Amazon focused on emerging ad technologies. Previously at Twitch working on a global baremetal and cloud system distributing video on the edge, backbone and caching systems, and traffic control management. In a past life I was the <a href="https://thefulcrum.ca/tag/marissa-phul/">news editor</a> at my university newspaper. In my free time I make things. I write about my projects <a href="/blog">here</a>.
              <br></br>
              <br></br>
              Feel free to <a href = "mailto:marissaphul@gmail.com">reach out</a>.
            </p>
            {/* <ul className="about">
              <li>Creative technologist based in Toronto.</li>
              <li>Former software engineer @ Twitch working on infrastructure and video distribution for three years.</li>
              <li>In a past life, News Editor at my university newspaper, you can find my writing <a href="https://thefulcrum.ca/tag/marissa-phul/">here</a>.</li>
              <li>More recent writing is <a href="/blog">here</a>, my latest post is 
              {post.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <Link style={{ boxShadow: `none`}} to={node.fields.slug}>                    
                  {title}
                </Link>
                )
              })}.
              </li>
              <li>Feel free to <a href = "mailto:marissaphul@gmail.com">reach out</a>, I'm always happy to connect!</li>
            </ul> */}
          </div>
        </div>
      </Layout>
    </html>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 1, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
