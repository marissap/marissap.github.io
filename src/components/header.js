import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  let header
  const data = useStaticQuery(graphql`
    query headerQuery {
      site {
        siteMetadata {
          title
          author {
            summary
          }          
        }
      }
    }
  `)

  header = (
    <h1
      style={{
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        MP
      </Link>
    </h1>
  )

  return (
    <div className="header-with-nav">
        <header>{header}</header>
    </div>
  )
}

export default Header
