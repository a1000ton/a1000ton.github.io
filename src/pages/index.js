import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import Presentation from "../components/presentation"

import "./pages.css"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Presentation />
      <div className="publications-section">
        <h1 className="publications-header">Publicações</h1>
        {edges.map(edge => (
          <PostLink key={edge.node.id} post={edge.node} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          description: excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
