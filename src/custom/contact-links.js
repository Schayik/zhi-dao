import React from 'react'
import styled from 'styled-components'

import Markdown from '../components/markdown'

import MailIcon from '../icons/mail'
import CallIcon from '../icons/call'
import ChatIcon from '../icons/chat'

const html = `<p>Voor het maken van een afspraak, kunt u contact opnemen. U krijgt dan een bevesiging toegestuurd of de praktijk neemt contact met u op voor een nadere afspraak. Overdag heb ik vaak afspraken, dus na 17:00 uur ben ik het beste bereikbaar.</p>`

const links = [
  { href: 'tel:0478-514313', heading: 'Telefoon', text: '0478-514313',  Icon: CallIcon },
  { href: 'mailto:info@zhidao.nl', heading: 'Mail', text: 'info@zhidao.nl', Icon: MailIcon },
  { href: 'https://api.whatsapp.com/send?phone=+31651469310', heading: 'Whatsapp', text: '06-51469310', Icon: ChatIcon },
]

const Form = () => (
  <StyledLinks>
    <Markdown html={html} />
    <ul>
      {links.map(link => (
        <li key={link.href}>
          <a href={link.href} target='_blank' rel="noopener noreferrer">
            <link.Icon />
            <h3>{link.heading}</h3>
            <p>{link.text}</p>
          </a>
        </li>
      ))}
    </ul>
  </StyledLinks>
)



export default Form

const StyledLinks = styled.div`

  ul {
    margin-top: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    a {
      border: 1px ${p => p.theme.colors.red} solid;
      padding: 1.875rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        height: 3.75rem;
        width: 3.75rem;
        margin-bottom: 1.875rem;
      }

      h3 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: .5rem;
      }

      &:hover {
        border-color: ${p => p.theme.colors.cherry};
        svg path, svg g {
          stroke: ${p => p.theme.colors.cherry};
        }
      }
    }

    @media (max-width: ${p => p.theme.media.max}px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: ${p => p.theme.media.large}px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: ${p => p.theme.media.medium}px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  
  
`