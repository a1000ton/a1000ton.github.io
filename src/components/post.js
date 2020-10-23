import React from "react"
import { graphql } from "gatsby"
import { BiCalendarCheck } from "react-icons/bi"
import Layout from "./layout"
import Tags from "./tags"
import "./post.css"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div>
        <h1 className="post-title">{frontmatter.title}</h1>
        <div className="post-subheader">
          <div className="post-subheader-content">
            <div className="post-link-date">
              <BiCalendarCheck /> {frontmatter.date}
            </div>
            <Tags className="post-link-tags" tags={frontmatter.tags} />
          </div>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
      }
    }
  }
`
