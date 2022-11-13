
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './layout/Navbar';

import './App.css';
import About from './pages/About';
import AddBlock from './pages/AddBlock';
import Error from './pages/Error';
import Home from "./pages/Home.jsx"
import { useState } from 'react';
import Protected from './layout/Protected';



function App() {

  const [isLoging, setisLoging ] = useState(false)

  return (
    <BrowserRouter>
    <Navbar />

   {isLoging ? 
   (<button
   onClick={()=>{setisLoging(!isLoging)}} > log in </button>
   ):(
    <button
    onClick={()=>{setisLoging(!isLoging)}} > log out </button>
   )}


      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/addblock' element={ <Protected isLoging={isLoging}>
         <AddBlock /> 
          </Protected>} />
        <Route path='/*' element={ <Error /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
