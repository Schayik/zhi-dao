import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import Logo from '../icons/zhi-dao'

const links = [
  { link: "/behandelmethoden", label: 'Behandelmethoden', small: 'Behandelmethoden' },
  { link: "/coaching-en-begeleiding", label: 'Coaching en begeleiding', small: 'Coaching' },
  { link: "/voor-patienten", label: 'Voor Patiënten', small: 'Patiënten' },
  { link: "/voor-bedrijven", label: 'Voor Bedrijven', small: 'Bedrijven' },
  { link: "/over-zhi-dao", label: 'Over Zhi Dao', small: 'Over Zhi Dao' },
]

const List = ({ className, pathname }) => (
  <ul className={className}>
    {links.map(link => (
      <li key={link.link}>
        <Link to={link.link} className={pathname === link.link ? 'active' : ''}>
          {className === 'big' ? link.label : link.small}
        </Link>
      </li>
    ))}
  </ul>
)

const NavBar = ({ pathname }) => (
  <StyledNavBar>
    <div className='compress'>
      <List className='big' pathname={pathname} />
      <List className='small' pathname={pathname} />
      <div className='menu' />
      <div className='sidebar'>
        <Link to='/' className={pathname === '/' ? 'flag active' : 'flag'}>
          <Logo />
          <h1>Zhi Dao</h1>
        </Link>
      </div>
      <div className='contact' />
    </div>
  </StyledNavBar>
)

const StyledNavBar = styled.nav`

  height: ${p => p.theme.navbar.height}px;

  .compress {
    display: flex;
    height: 100%;
  }

  ul.small, .menu, .contact {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    li a {
      font-size: 1.125rem;

      &:hover {
        color: ${p => p.theme.colors.red};
      }

      &.active {
        color: ${p => p.theme.colors.cherry};
      }
    }
  }

  .sidebar {
    flex-shrink: 0;
    width: ${p => p.theme.sidebar.width}px;
    position: relative;

    a.flag {
      background-color: ${p => p.theme.colors.red};
      position: absolute;
      left: 32px;
      right: 32px;
      height: calc(${p => p.theme.navbar.height}px + 40px);
      z-index: 1;

      &:not(.active):hover {
        background-color: ${p => p.theme.colors.cherry};
      }

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
        line-height: .8;
      }
    }
  }

  @media (max-width: ${p => p.theme.media.max}px) {
    ul.big { display: none; }
    ul.small { display: flex; }
  }
  @media (max-width: ${p => p.theme.media.large}px) {
    ul.small { display: none; }
    .menu, .contact { 
      display: block; 
      flex: 1;
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
