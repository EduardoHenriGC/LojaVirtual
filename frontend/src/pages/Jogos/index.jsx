import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import {BsFillCartCheckFill} from "react-icons/bs"
import {FcLike} from "react-icons/fc"
import {Content, UL, ImgContainer} from "../ContentStyles.js"
import api from "../../Data/api";



const ListJogos = () => {

  const [jogos, setJogos] = useState([]);



 const getJogos = async () => {
try{
  const res = await api.get("/jogos")

  const data = res.data
  setJogos(data)
}
catch{}


 }

  useEffect(() => {
    getJogos();

     
      
  }, 
  []);
 
  return (
    <Content>
   <UL>
    {jogos.map((item)=>
    
    <li className="container-list" key={item.nome}>

     <h4>{item.nome}</h4>
     <ImgContainer><img src={item.imgurl}/></ImgContainer>
     <div className="container-preco">
      
     <p className="preco">$ {item.preco}</p>
     
     <div className="icons">
     <BsFillCartCheckFill className="cart"/>
     <FcLike className="like"/>
     </div>
     
     </div>
     
     

    </li>
    )}


   </UL>
   </Content>
)}
export default ListJogos;