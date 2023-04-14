import styled from "styled-components";

export const Container = styled.div`

position: absolute;
width: 80vw;
float:right;

  .lds-hourglass {
    
    position: fixed;
    z-index: 1;
    top: 20%;
    bottom: 20%;
    right: 20%;
    left: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
  }
  img{
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
  button{


    border: none;
    background-color: transparent;
  }
  .btn{
    position: absolute;
    top: 30px;
    right: 30px;
    color: blue;
    color: #333;
    
    border: none;
    font-size:36px; 
    cursor: pointer;   
  }
`;