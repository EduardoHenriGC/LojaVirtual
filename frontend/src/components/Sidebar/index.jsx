import React from 'react'
import styled from 'styled-components'
import Btn from '../button'
import { Link } from 'react-router-dom';

const Nav = styled.div`


background-color: #348e91;
width: 17vw;
display: flex;
flex-direction: column;
height: 100vh;
position: fixed;


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
      
      <li><Link to="/"><Btn nome="home"/></Link></li>
      <li><Link to="/jogos"><Btn nome="jogos"/></Link></li>
    <li><Link to="/livros"><Btn nome="livros"/></Link></li>
    <li><Link to="/mangas"><Btn nome="mangas"/></Link></li>
    <li><Link to="/colecionaveis"><Btn nome="colecionáveis"/></Link></li>
    </ul></Nav>
  )
}

export default Sidebar