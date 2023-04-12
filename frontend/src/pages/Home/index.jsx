import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import api from "../../Data/api";




const ImgContainer = styled.div`

color:red;
width:200px;
height:230px;



`
const UL = styled.ul`

display:flex;
justify-context:center;
align-items:center;
gap:20px;
list-style:none;

p{

text-aling:center;

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


display:flex;
justify-content:center;
text-transform:uppercase;
font-weight:600;

}
`



const ListProduto = () => {

  const [produtos, setProdutos] = useState([]);



 const getProdutos = async () => {
try{
  const res = await api.get("/produtos")

  const data = res.data
  setProdutos(data)
}
catch{}


 }

  useEffect(() => {
    getProdutos();

     
      
  }, 
  []);
 
  return (
   <UL>
    {produtos.map((item)=>
    
    <li className="container-list" key={item.id}>

     <h4>{item.nome}</h4>
     <ImgContainer><img src={item.imgurl}/></ImgContainer>
     <div>


     
     <button><p>{item.preco}</p></button>
     </div>
     <p>{item.descricao}</p>
     

    </li>
    )}


   </UL>

)}
export default ListProduto;