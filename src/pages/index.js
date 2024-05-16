import React from "react"
import Layout from "../components/layout"
import Quote from "../components/quote"
// import SEO from "../components/seo"

const BlogIndex = ({ location }) => {

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
            <ul className="about">
              <li>Creative technologist based in Toronto.</li>
              <li>Former software engineer on video distribution @ Twitch.</li>
              <li>Previously, News Editor at my university newspaper, you can find my writing <a href="https://thefulcrum.ca/tag/marissa-phul/">here</a>.</li>
              <li>And <a href="/blog">here</a> is my more recent writing.</li>              
              <li>I'm obsessive about running, you can follow me on <a href="https://www.strava.com/athletes/53249155">Strava</a>!</li>
              <li>I also love film, you can follow me on <a href="https://letterboxd.com/mformalice/">Letterboxd</a>!</li>
              <li>And finally, here is my <a href="https://github.com/marissap">Github</a>!</li>
              <li>Please <a href = "mailto:marissaphul@gmail.com">reach out</a> if you'd like to chat!</li>
            </ul>
          </div>
        </div>
      </Layout>
    </html>
  )
}

export default BlogIndex