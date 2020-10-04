import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header-content">
    <div className="header-title">
      <Link to="/">{siteTitle}</Link>
    </div>
    <nav>
      <Link to="/all-posts">Todas publicações</Link>
      <Link to="/about">Sobre</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
