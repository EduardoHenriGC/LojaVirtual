import React from 'react'
import styled from 'styled-components'
import Btn from '../button'
import SearchPage from '../Search'
import { Link } from 'react-router-dom';

const Nav = styled.div`


background-color: #348e91;
width: 20vw;
display: flex;
flex-direction: column;
height: 100vh;


ul{

    display: flex;
    margin-top: 100px;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    
}

`




const Sidebar = () => {
  return (
    <Nav><ul>
      <li><SearchPage/></li>
      <li><Link to="/"><Btn nome="home"/></Link></li>
      <li><Link to="/jogos"><Btn nome="jogos"/></Link></li>
    <li><Link to="/livros"><Btn nome="livros"/></Link></li>
    <li><Btn h nome="mangás"/></li>
    <li><Btn nome="colecionáveis"/></li></ul></Nav>
  )
}

export default Sidebar