import React from "react"
import { Link, useParams } from "react-router-dom"
import Layout from "../components/layout"
import Header from "../components/header"
import { posts } from "../utils/posts"

const BlogPostTemplate = () => {
  const { slug } = useParams()
  const postIndex = posts.findIndex((entry) => entry.slug === slug)
  const post = posts[postIndex]

  if (!post) return null

  const previous = posts[postIndex + 1]
  const next = posts[postIndex - 1]

  return (
    <Layout>
      <Header/>
      <article
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `52.5rem`,
          padding: `2.25rem 0.25rem`,
        }}
      >
        <header>
          <h2
            style={{
              marginTop: `1.5rem`,
              marginBottom: 0,
              fontFamily: `Karla, sans-serif`,
              fontWeight: `200`,              
            }}
          >
              {post.title}
          </h2>
          <p
            style={{
              fontSize: `0.9rem`,
              display: `block`,
              marginBottom: `1.5rem`,
            }}
          >
            {post.formattedDate} - {post.readingTime}
          </p>
        </header>
        <section className="blog-post-content" style={{
          fontFamily: `Karla, sans-serif`,
          letterSpacing: `0.5px`,
        }} dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: `1.5rem`,
          }}
        />
        <footer>
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
              {previous && (
              <Link to={`/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate
