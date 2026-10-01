import React from "react"
import { Link } from "react-router-dom"
import Layout from "../components/layout"
import Header from "../components/header"
import { posts } from "../utils/posts"

const AllPosts = () => {
  return (
    <Layout>
      <Header/>
        {posts.map((post) => (
          <article key={post.slug}>
            <header>
              <h3
                style={{
                  fontFamily: `Karla, sans-serif`,
                  fontWeight: `200`,
                  marginBottom: `0.375rem`,
                }}
              >
                <Link style={{ boxShadow: `none` }} to={`/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p>{post.formattedDate}</p>
            </header>
            <section>
              <p>{post.description}</p>
            </section>
          </article>
        ))}
    </Layout>
  )
}

export default AllPosts

