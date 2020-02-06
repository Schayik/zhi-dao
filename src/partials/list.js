import React from "react"
import styled from 'styled-components'
import { Link, withPrefix } from 'gatsby'

const List = ({ links, className, pathname }) => (
  <StyledList className={className}>
    {links.map(link => (
      <li key={link.link}>
        <Link to={link.link} className={pathname === withPrefix(link.link) ? 'active' : ''}>
          {link.label}
        </Link>
      </li>
    ))}
  </StyledList>
)

export default List

const StyledList = styled.ul`

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
`