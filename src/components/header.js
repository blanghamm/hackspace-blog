import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <div className="container-header">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">
            <span className="first-word">Ben </span>Langham
          </Link>
        </div>
        {/* <div className="navigation">
          <nav>
            <Link to="/work">work</Link>
            <Link to="/about">about</Link>
            <Link to="/contact-me">contact me</Link>
          </nav>
        </div> */}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
