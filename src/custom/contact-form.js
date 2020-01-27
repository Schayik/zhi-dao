import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

import Button from '../components/button'

const Form = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>

      <p>Voor het maken van een afspraak, kunt u onderstaand formulier invullen. U krijgt dan een bevesiging toegestuurd of de praktijk neemt contact met u op voor een nadere afspraak.</p>

      <label htmlFor="name">Naam</label>
      {errors.name && <p className='error'>{errors.name.message}</p>}
      <input
        name="name"
        ref={register({
          required: 'Vul alstublieft uw naam in'
        })}
      />
        
      <label htmlFor="email">E-mailadres</label>
      {errors.email && <p className='error'>{errors.email.message}</p>}
      <input
        name="email"
        ref={register({
          required: 'Vul alstublieft uw email adres in',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Vul alstublieft een geldig email adres in"
          }
        })}
      />

      <label htmlFor="voorkeur">Voorkeursdag en voorkeurstijd</label>
      {errors.voorkeur && <p className='error'>{errors.voorkeur.message}</p>}
      <textarea
        name="voorkeur"
        ref={register({
          required: 'Vul alstublieft uw voorkeur in',
        })}
      />
        
      <Button type="submit" label='Afspraak maken' as='button' />
    </StyledForm>
  )
}



export default Form

const StyledForm = styled.form`

  p, label, input, textarea {
    font-size: 1rem;
    line-height: 1.5;
    display: block;
  }

  p {
    margin-bottom: 40px;
    &.error {
      color: ${p => p.theme.colors.red};
      margin-bottom: 0;
    }
  }

  input, textarea {
    border: solid 1px #a5a5a5;
    padding: 8px;
    &:focus {
      outline: none;
      border-color: ${p => p.theme.colors.red};
    }
  }

  input {
    width: 400px;
    min-height: 48px;
    margin-bottom: 24px;
  }

  textarea {
    min-height: 200px;
    resize: vertical;
    width: 100%;
  }

  button {
    margin-top: 40px;
    width: 250px;
    float: right;
    &:hover {
      cursor: pointer;
    }
  }
`