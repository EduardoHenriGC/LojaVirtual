import React, { useEffect, useState } from "react";

import {BsFillCartCheckFill} from "react-icons/bs"
import {FcLike} from "react-icons/fc"

import api from "../../Data/api";




import {Content, UL, ImgContainer} from "../ContentStyles.js"

const ListColecionaveis = () => {

  const [colecionaveis, setColecionaveis] = useState([]);



 const getColecionaveis = async () => {
try{
  const res = await api.get("/colecionaveis")

  const data = res.data
  setColecionaveis(data)
}
catch{}


 }

  useEffect(() => {
    getColecionaveis();

     
      
  }, 
  []);
 
  return (
    <Content>
   <UL>
    {colecionaveis.map((item)=>
    
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
export default ListColecionaveis;