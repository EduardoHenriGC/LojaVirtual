import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import {BsFillCartCheckFill} from "react-icons/bs"
import {FcLike} from "react-icons/fc"
import {Content, UL, ImgContainer} from "../ContentStyles.js"
import api from "../../Data/api";





const ListLivros = () => {

  const [livros, setLivros] = useState([]);



 const getLivros = async () => {
try{
  const res = await api.get("/livros")

  const data = res.data
  setLivros(data)
}
catch{}


 }

  useEffect(() => {
    getLivros();

     
      
  }, 
  []);
 
  return (
    <Content>
   <UL>
    {livros.map((item)=>
    
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
export default ListLivros;