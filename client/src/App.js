// src/App.js

import { Box } from '@mui/material';
import './App.css';
import Header from './component/Header/header';
import Home from './component/Home/Home';
import { Dataprovider } from './context/Dataprovider'; // <-- Make sure this path is correct
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailView from './component/detailes/DetaileView';
function App() {
  return (
    
    <Dataprovider>
      <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:id' element={<DetailView></DetailView>}></Route>
        </Routes >
      </Box>
      </BrowserRouter>
      </Dataprovider>
  
  );
}


export default App;
