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

  return (
    <div className="header-with-nav">
        <header>{header}</header>
    </div>
  )
}

export default Header
