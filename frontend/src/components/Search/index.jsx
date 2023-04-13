import api from "../../Data/api";
import { useState } from "react";
import styled from "styled-components";
import {BsSearch} from "react-icons/bs"
import { Link } from 'react-router-dom';




const ImgContainer = styled.div`

color:red;
width:170px;
height:210px;



`
const SearchItem = styled.ul`

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
const ContainerSearch = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Form = styled.form`
border-radius:15px;
display: flex;
gap: 10px;


#icon-busca{
  

  color: #333;
  
  font-size: 28px;
  cursor: pointer;
 



:hover{
color:goldenrod;

}
}
#txtBusca{
float:left;

display: flex;
justify-content: center;
align-items: center;
margin-left: 34px;
font-style:italic;
font-size:18px;
border:none;
height:32px;
width:185px;
border-radius: 0.25rem;
padding: 3px;
}
`
const Button = styled.button`
border: none;
background-color: transparent;
`

const SearchPage = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await api.get('/search', { params: { q: searchTerm } });
      setSearchResults(response.data);
    };
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
    <ContainerSearch>

    <Form  onSubmit={handleSubmit}>
  <input type="text" value={searchTerm} onChange={handleChange}  id="txtBusca" placeholder="Buscar..."/>
  
  <Link to="/search"><Button type="submit"><BsSearch id="icon-busca"/></Button></Link>
</Form>

    </ContainerSearch>

    
   

   
      </div>
    );
  }
  
  export default SearchPage;



 