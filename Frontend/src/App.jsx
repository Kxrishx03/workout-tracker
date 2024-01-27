import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Home } from '../pages/Home';
import { Navbar } from "../compoents/Navbar";

import './App.css'

function App(){
    return (
     
          <div className="app">
            <BrowserRouter>
            <Navbar />
            <div className="pages">
            <Routes>
            <Route path="/" element={<Home />} />
            </Routes>
            </div>
           
           </BrowserRouter>

       </div>
    );
}


export default App;
