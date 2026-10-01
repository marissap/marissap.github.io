import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <p
      style={{
        marginTop: `20px`,
      }}>
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        ⬸ Home
      </Link>
    </p>
  )

}

export default Header
