import styled from 'styled-components';


export const Content = styled.div`


width: 83vw;
margin-left: 17vw;
height: 100%;








`


export const ImgContainer = styled.div`

color:red;
width:170px;
height:210px;



`
export const UL = styled.ul`

margin-top: 80px;
display:flex;
flex-wrap: wrap;
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
  margin-top: 5px;
 margin-bottom: 30px;
 


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