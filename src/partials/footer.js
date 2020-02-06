import React from 'react'
import styled from 'styled-components'
import { Link, withPrefix } from 'gatsby'

const links = [
  { link: "/contact", label: 'Contact' },
  { link: "/privacyverklaring", label: 'Privacyverklaring' },
]

const Footer = ({ pathname }) => (
  <StyledFooter>
    <div className='compress'>
      <div className='wrapper'>
        <ul>
          {links.map(link => (
            <li key={link.link}>
              <Link 
                to={link.link} 
                className={pathname === withPrefix(link.link) ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className='back' to={pathname}>Terug naar boven</Link>
      </div>
    </div>
  </StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
  margin-top: 6.25rem;
  /* height: 6.25rem; */
  

  .wrapper {
    border-top: 1px solid ${p => p.theme.colors.black};
    padding: 2.5rem 0;
    /* height: 100%; */

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

      &:hover {
        color: ${p => p.theme.colors.red};
      }

      &.active {
        color: ${p => p.theme.colors.cherry};
      }
    }
  }  

  @media (max-width: ${p => p.theme.media.small}px) {
    height: auto;

    .wrapper, .wrapper ul { 
      flex-direction: column;
      align-items: center;
    } 

    .wrapper ul li {
      margin: 0;
      margin-bottom: 20px;
    }
  }

`

