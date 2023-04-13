import React from 'react'
import styled from 'styled-components'


const Button = styled.button`

border: none;
padding: 10px 30px;

width: 190px;
background-color: #1c5052;
text-align: center;
display: flex;
justify-content: center;
border-radius: 0.25rem;
color: #fff;
text-transform: uppercase;
cursor: pointer;
font-weight: 600;

:hover{

color: #1c5052;
background-color: #f2f2f2;

}


`


const Btn = (props) => {
  return (
    <Button>{props.nome}</Button>
  )
}

export default Btn