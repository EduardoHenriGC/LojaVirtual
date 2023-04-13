import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import {BsFillCartCheckFill} from "react-icons/bs"
import {FcLike} from "react-icons/fc"

import api from "../../Data/api";


const Content = styled.div`


width: 80vw;
height: 100vh;



background-color: #f2f2f2;



`


const ImgContainer = styled.div`

color:red;
width:170px;
height:210px;



`
const UL = styled.ul`

margin-top: 40px;
display:flex;
justify-content: center;
align-items:center;
gap: 40px;
list-style:none;
.icons{

display: flex;
justify-content: space-around;
align-items: center;

cursor: pointer;

}

.cart{


  color: green;
  font-size: 1.4rem;
  margin-right: 15px;
}

.like{


  font-size: 1.4rem;
}
.container-preco{

  display: flex;
  justify-content: space-between;
  align-items: center;
 
 


}
.preco{

margin-top: 10px;
font-weight: bold;
font-size: 1.2rem;



}
p{

text-align: center;

}


img{
  width:100%;
  height:100%;
  border-radius:0.25rem;
 
}


button{
border:none;
width:100%;
margin-top:7px;
border-radius:0.25rem;
background:#22453a;
font-size:1.1rem;
color:#fff;
cursor:pointer;

}
h4{

margin-bottom: 10px;
text-align: center;
text-transform: uppercase;

}
`



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
    
    <li className="container-list" key={item.id}>

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