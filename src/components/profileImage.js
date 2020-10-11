import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const fluid = data?.profileImage?.childImageSharp?.fluid

  return fluid ? (
    <Img
      className="profile-image"
      fluid={data.profileImage.childImageSharp.fluid}
    />
  ) : (
    <div>Picture not found</div>
  )
}

export default ProfileImage
