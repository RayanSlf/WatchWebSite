import React from 'react'
import Hero from './component/Hero.jsx/Hero'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './component/Product/Product';
import Singin from './component/Singin/Singin';
import Collection from './component/Collection/Collection';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Homepage" element={<Hero/>}></Route>
        <Route path="Product/:id" element={<Product/>}></Route>
        <Route path="Singin" element={<Singin/>}></Route>
        <Route path="Collection" element={<Collection/>}></Route>

      </Routes>
    </BrowserRouter>

   
   
  )
}

export default App