import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import Presentation from "../components/presentation"

const AllPosts = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="All Posts" />
      <div>
        {edges.map(edge => (
          <PostLink key={edge.node.id} post={edge.node} />
        ))}
      </div>
    </Layout>
  )
}

export default AllPosts

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          description: excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
