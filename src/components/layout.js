import React from "react"
import { rhythm } from "../utils/typography"

const Layout = ({ children }) => {

  return (
    <div
      className="main-layout"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(40),
        padding: `7.5vh ${rhythm(1 / 4)}`,
      }}
    >
      <main>{children}</main>
    </div>
  )
}

export default Layout
