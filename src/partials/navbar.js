import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import links from "../data/links"
import Logo from '../icons/zhi-dao'

const NavBar = ({ siteTitle }) => (
  <StyledNavBar>
    <div className='compress'>
      <ul>
        {links.map(link => (
          <li key={link.link}>
            <Link to={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className='sidebar'>
          <div className='flag'>
            <Logo />
            <h1>Zhi Dao</h1>
          </div>
      </div>
    </div>
  </StyledNavBar>
)

const StyledNavBar = styled.nav`

  height: ${p => p.theme.navbar.height}px;

  .compress {
    display: flex;
    height: 100%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    li {
      font-size: 1.125rem;
    }
  }

  .sidebar {
    flex-shrink: 0;
    width: ${p => p.theme.sidebar.width}px;
    position: relative;

    .flag {
      background-color: ${p => p.theme.colors.red};
      position: absolute;
      left: 40px;
      right: 40px;
      height: calc(${p => p.theme.navbar.height}px + 40px);
      z-index: 1;

      svg {
        position: absolute;
        left: 32px;
        top: 20px;
        width: 160px;
      }

      h1 {
        position: absolute;
        right: 32px;
        bottom: 20px;
        color: ${p => p.theme.colors.white};
        font-size: 40px;
        font-style: italic;
      }
    }
  }
`

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
