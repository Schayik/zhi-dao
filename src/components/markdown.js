import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Button from './button'

const Markdown = ({ html, buttons, fixed, imageSide }) => (
  <StyledMarkdown>
    {fixed && imageSide === 'left' && <Img className='image left' fixed={fixed} />}
    <div 
      className='markdown' 
      dangerouslySetInnerHTML={{ __html: html }}
    />
    {fixed && imageSide === 'right' && <Img className='image right' fixed={fixed} />}
    {!fixed &&
      <div className='buttons'>
        {buttons && 
          <ul>
            {buttons.map(button => (
              <li key={button.link}>
                <Button 
                  to={button.link}
                  link={button.link}
                  label={button.label}
                />
              </li>
            ))}
          </ul>
        }
      </div>
    }
  </StyledMarkdown>
)

export default Markdown

const StyledMarkdown = styled.div`
  display: flex;

  .markdown {
    font-size: 1rem;
    line-height: 30px;

    ul {
      list-style: disc;
      padding-left: 16px;
    }
  }

  .buttons {
    flex-shrink: 0;
    width: ${p => p.theme.sidebar.width}px;

    padding: 0 32px;

    li:not(:first-child) {
      margin-top: 20px;
    }

  }

  .image {
    flex-shrink: 0;
    width: 360px;
    height: 270px;

    &.left { margin-right: 72px; }
    &.right { margin-left: 72px; }
  }

`