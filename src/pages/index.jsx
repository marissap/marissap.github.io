import React from "react"
import Layout from "../components/layout.jsx"
import GerminationZine from "../assets/Germination.pdf"

const BlogIndex = () => {
  return (
    <div className="home">
      <Layout>
        <div className="container">
          <div className="column a">
            <h1 className="title">Marissa<br/>Phul</h1>
            <p className="summary">I believe we can create any <span className="world">world</span> we want.<br className="summary-break" /> I work on systems, products, and ideas that embody this spirit of <span className="progress">progress</span> and <span className="creativity">optimism</span>.</p>
          </div>
          <div className="column b">
            <div className="about list-container">
              <p className="list-paragraph">Currently, Program Lead for <a href="cloudflare.com/startups">Startups</a> & Senior Growth Engineer @ Cloudflare.</p>
              <p className="list-paragraph">Opinionated engineer with strong preferences for how systems are built thanks to working at Twitch on video distribution. This included delivery on the edge, internal protected replication, network traffic control management, network protocols, everything that happens to video between ingest in the origin and playback in the browser. And for time at Amazon and AWS handling signalling and communications for Alexa devices and crafting user experiences with the Ads team.</p>
              <p className="list-paragraph"><a href="/blog">Writer</a> and researcher with published work across various <a href={GerminationZine} target="_blank">independent</a> publications, <a href="/zine/">zines</a>, residencies in Tokyo, and <a href="https://thefulcrum.ca/tag/marissa-phul/">editorial work</a>.</p>
              <p className="list-paragraph">Community organizer at the Interference Archive in Brooklyn and <a href="https://mindsmatternyc.org/">Minds Matter NYC</a>.</p>
              <p className="list-paragraph">Also, I like to <a href="/lathe-lamps/">make</a> things.</p>

            </div>
          </div>
          <nav className="social-links" aria-label="Social links">
            <a href="https://www.linkedin.com/in/marissaphul">LinkedIn</a>
            {/* <a href="https://github.com/marissap">GitHub</a> */}
            <a href="https://www.instagram.com/os.maris/">Instagram</a>
            <a href="https://twitter.com/transienterrors">Twitter</a>
            <a href="mailto:marissaphul@gmail.com">Email</a>
          </nav>
        </div>
      </Layout>
    </div>
  )
}

export default BlogIndex
