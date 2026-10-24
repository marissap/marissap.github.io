import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <main>{children}</main>
    </div>
  )
}

export default Layout
