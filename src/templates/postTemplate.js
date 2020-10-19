import React from "react"
import { graphql } from "gatsby"
import { BiCalendarCheck } from "react-icons/bi"
import Layout from "../components/layout"
import Tags from "../components/tags"
import "./post.css"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div>
        <h1 className="post-title">{frontmatter.title}</h1>
        <div className="post-date">
          <BiCalendarCheck /> <span className="date">{frontmatter.date}</span>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Tags className="post-tags" tags={frontmatter.tags} />
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
