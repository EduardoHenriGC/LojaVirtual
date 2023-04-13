import Sidebar from "./components/Sidebar"
import ListProduto from "./pages/Home"
import GlobalStyle from "./Globalstyle"
import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListLivros from "./pages/Livros";
import ListJogos from "./pages/Jogos";
import SearchItem from "./components/Search/index"
import SearchPage from "./components/Search/index";



const Container = styled.div`


display: flex;

width: 100vw;
height: 100%;


`






function App() {


  return (
    <Container>
       <Router>
       <Sidebar/>

        <Routes>
          <Route path="/" element={<ListProduto />}></Route>
          <Route path="/livros" element={<ListLivros />}></Route>
          <Route path="/jogos" element={<ListJogos />}></Route>
          
          
         
          
        
        </Routes>
      </Router>
      <GlobalStyle/>
      
      
     
    </Container>
  )
}

export default App
