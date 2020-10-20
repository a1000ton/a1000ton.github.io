import React from "react"
import { Link } from "gatsby"
import { BiCalendarCheck } from "react-icons/bi"
import Tags from "./tags"
import "./post-link.css"

const PostLink = ({ post }) => (
  <div className="post-thumb">
    <Link
      className="link-title"
      to={post.frontmatter.slug}
    >{`${post.frontmatter.title}`}</Link>
    <div className="post-subheader">
      <div className="post-subheader-content">
        <div className="post-link-date">
          <BiCalendarCheck /> {post.frontmatter.date}
        </div>
        <Tags className="post-link-tags" tags={post.frontmatter.tags} />
      </div>
    </div>
    <div>{post.description}</div>
  </div>
)

export default PostLink
