import React from "react"
import { rhythm } from "../utils/typography"

const Layout = ({ children }) => {

  return (
    // <div className="wrapper">
    //       <div class="sidebar">
    //       <a class="active" href="#home">Home</a>
    //       <a href="#news">News</a>
    //       <a href="#contact">Contact</a>
    //       <a href="#about">About</a>
    //     </div>    
    <div
      className="main-layout"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(40),
        padding: `0px ${rhythm(1 / 4)} 40px`,
      }}
    >
      <main>{children}</main>
    </div>
  // </div>
  )
}

export default Layout
