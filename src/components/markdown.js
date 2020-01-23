import React from 'react'
import styled from 'styled-components'

const Markdown = ({ html }) => (
  <StyledMarkdown
    className='markdown' 
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

export default Markdown

const StyledMarkdown = styled.div`

  font-size: 1rem;
  line-height: 1.875;

  ul {
    list-style: disc;
    padding-left: 16px;
  }
`