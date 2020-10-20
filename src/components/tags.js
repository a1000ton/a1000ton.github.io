import React from "react"
import "./tags.css"

const Tags = props => {
  const { tags, className, ...otherProps } = props
  return (
    <div className={`tags-container ${className}`} {...otherProps}>
      {tags && tags.map(tag => <div className={`tag ${tag}`}>{tag}</div>)}
    </div>
  )
}

export default Tags
