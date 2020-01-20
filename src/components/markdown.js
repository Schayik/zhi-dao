import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Markdown = ({ markdownRemark, buttons }) => (
  <StyledMarkdown>
    <div 
      className='markdown' 
      dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
    />
    <div className='buttons'>
      {buttons && 
        <ul className='buttons'>
          {buttons.map(button => (
            <li key={button.link}>
              <Link to={button.link}>{button.label}</Link>
            </li>
          ))}
        </ul>
      }
    </div>

  </StyledMarkdown>
)

export default Markdown

const StyledMarkdown = styled.div`
  display: flex;
  align-items: center;

  .markdown {
    font-size: 1rem;
    line-height: 30px;

    /* p, ul {
      margin-bottom: 1rem;
    } */

    ul {
      list-style: disc;
      padding-left: 16px;
    }
  }

  .buttons {
    flex-shrink: 0;
    width: ${p => p.theme.sidebar.width}px;

  }

`