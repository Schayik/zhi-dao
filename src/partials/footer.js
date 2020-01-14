import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import links from '../data/footer-links'

const Footer = () => (
  <StyledFooter>
    <div className='compress'>
      <div className='wrapper'>
        <ul>
          {links.map(link => (
            <li key={link.link}>
              <Link to={link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Link to='/'>Terug naar boven</Link>
      </div>
    </div>
  </StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
  margin-top: 100px;
  height: 100px;

  .wrapper {
    border-top: 1px solid ${p => p.theme.colors.black};
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;

      li {
        margin-right: 40px;
      }
    }

    a {
      font-size: 1.125rem;
    }
  }  

`

