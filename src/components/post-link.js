import React from "react"
import { Link } from "gatsby"
import { BiCalendarCheck } from "react-icons/bi"
import "./post-link.css"

const PostLink = ({ post }) => (
  <div className="post-thumb">
    <Link
      className="link-title"
      to={post.frontmatter.slug}
    >{`${post.frontmatter.title}`}</Link>
    <div>
      <BiCalendarCheck /> {post.frontmatter.date}
    </div>
    <div>{post.description}</div>
  </div>
)

export default PostLink
