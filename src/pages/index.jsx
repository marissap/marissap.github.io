import React from "react"
import Layout from "../components/layout"
import Quote from "../components/quote"

import List from "../components/list";

const BlogIndex = () => {
  return (
    <div className="home">
      <Quote/>
      <Layout>
        <div className="container">
          <div className="column a">
            <h1 className="title">Marissa<br/>Phul</h1>
            <p className="summary">I believe we can create any <span className="world">world</span> we want.<br className="summary-break" /> I work on systems, products, and ideas that embody this spirit of <span className="progress">progress</span> and <span className="creativity">creativity</span>.</p>
          </div>
          <div className="column b">
            <List></List>  
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default BlogIndex
