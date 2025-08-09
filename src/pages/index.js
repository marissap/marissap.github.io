import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Quote from "../components/quote"
// import SEO from "../components/seo"
import GerminationZine from "../assets/Germination.pdf";

const BlogIndex = ({ data, location }) => {

  const post = data.allMarkdownRemark.edges

  return (
    <html lang="en" className="home">
      <Quote/>
      <Layout location={location} title="{siteTitle}">
        {/* <SEO title="Marissa Phul" keywords={[`blog`, `software engineer`]}/> */}       
        <div class="container">
          <div class="column a">
            <h1 className="title">Marissa<br></br>Phul</h1>
            <p className="summary">I believe we can create any <span className="world">world</span> we want.<br></br>I work on systems, products, and ideas that embody this spirit of <span className="progress">progress</span> and <span className="creativity">creativity</span>.</p>            
          </div>
          <div class="column b">
            <p className="about">
              Creative technologist and writer.
              <br></br>
              <br></br>
              I care about making the world a beautiful place by designing systems, physical infrastructure, and digital worlds with intention and creativity. I am driven to interdisciplinary work that bridges the gaps between strategy, innovation, and implementation.
              <br></br>
              <br></br>
              Currently, I'm focused on emerging communication technologies at Amazon <span>Alexa</span>, after spending time as a tech lead in the Ads org. I had zines on show at <a href="https://issuesmagshop.com/products/there-is-room-for-you-too?variant=50834174181677">Issues Mag</a> in Toronto, was recently published in the Brooklyn-based zine <a href={GerminationZine} target="_blank">Germination</a>, and spent the month of January in Tokyo writing with <a href="https://astray.com.au/">Astray</a>. I mentor high school students through <a href="https://mindsmatternyc.org/">Minds Matter NYC</a> and in my free time I make things. I write about all of it <a href="/blog">here</a>.
              <br></br>
              <br></br>
              Previously, at <span>Twitch</span>, I worked on a global baremetal and cloud system distributing video on the edge, orchestrating backbone and caching systems, and leading traffic control management. In a past life I was the <a href="https://thefulcrum.ca/tag/marissa-phul/">news editor</a> at my university newspaper.
              <br></br>
              <br></br>
              Feel free to <a href = "mailto:marissaphul@gmail.com">email</a> or catch me <a href="https://www.instagram.com/os.maris/">@os.maris</a>.
            </p>
          </div>
        </div>
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
