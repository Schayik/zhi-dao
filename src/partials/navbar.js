import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import List from './List'
import Menu from './Menu'
import Logo from '../icons/zhi-dao'
import MailIcon from '../icons/contact.js'

const links = [
  { link: "/behandelmethoden", label: 'Behandelmethoden', small: 'Behandelmethoden' },
  { link: "/coaching-en-begeleiding", label: 'Coaching en begeleiding', small: 'Coaching' },
  { link: "/voor-patienten", label: 'Voor Patiënten', small: 'Patiënten' },
  { link: "/voor-bedrijven", label: 'Voor Bedrijven', small: 'Bedrijven' },
  { link: "/over-zhi-dao", label: 'Over Zhi Dao', small: 'Over Zhi Dao' },
]

const linksSmall = [
  { link: "/behandelmethoden", label: 'Behandelmethoden' },
  { link: "/coaching-en-begeleiding", label: 'Coaching' },
  { link: "/voor-patienten", label: 'Patiënten' },
  { link: "/voor-bedrijven", label: 'Bedrijven' },
  { link: "/over-zhi-dao", label: 'Over Zhi Dao' },
]

const NavBar = ({ pathname }) => (
  <StyledNavBar>
    <div className='compress'>
      <List className='big' links={links} pathname={pathname} />
      <List className='small' links={linksSmall} pathname={pathname} />
      <Menu className='menu' links={links} />
      <div className='sidebar'>
        <Link to='/' className={pathname === '/' ? 'flag active' : 'flag'}>
          <Logo />
          <h1>Zhi Dao</h1>
        </Link>
      </div>
      <div className='contact'>
        <Link to='/contact'>
          <MailIcon />
        </Link>
      </div>
    </div>
  </StyledNavBar>
)

const StyledNavBar = styled.nav`

  height: ${p => p.theme.navbar.height};

  .compress {
    display: flex;
    height: 100%;
  }

  .contact {
    flex: 1;
    display: none;
    align-items: center;
    justify-content: flex-end;

    a {
      height: 2.5rem;
      max-width: 2.5rem;
      width: 100%;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  .small, .menu, .contact { display: none; }
  @media (max-width: ${p => p.theme.media.max}px) {
    .big { display: none; }
    .small { display: flex; }
  }
  @media (max-width: ${p => p.theme.media.large}px) {
    .small { display: none; }
    .menu, .contact { display: flex; }
  }
  
  .sidebar {
    flex-shrink: 0;
    width: ${p => p.theme.sidebar.width};
    position: relative;

    a.flag {
      background-color: ${p => p.theme.colors.red};
      position: absolute;
      left: 2rem;
      right: 2rem;
      height: calc(${p => p.theme.navbar.height} + 2.5rem);
      z-index: 1;

      &:not(.active):hover {
        background-color: ${p => p.theme.colors.cherry};
      }

      svg {
        position: absolute;
        left: 2rem;
        top: 1.25rem;
        width: 10rem;
      }

      h1 {
        position: absolute;
        right: 2rem;
        bottom: 1.25rem;
        color: ${p => p.theme.colors.white};
        font-size: 2.5rem;
        font-style: italic;
        line-height: .8;
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
