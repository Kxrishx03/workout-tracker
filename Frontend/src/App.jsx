import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import { UseAuthContext } from "../hooks/Useauthcontext";

import { Home } from '../pages/Home';
import { Navbar } from "../compoents/Navbar";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";

import './App.css'

function App(){

    const {user} = UseAuthContext();
    return (
     
          <div className="app">
            <BrowserRouter>
            <Navbar />
            <div className="pages">
            <Routes>
            <Route path="/" element={user?<Home />:<Navigate to="/login" />} />
            <Route path="/signup" element={!user?<Signup />: <Navigate to="/" />} />
            <Route path="/login" element={!user?<Login />:<Navigate to="/" />} />
            </Routes>
            </div>
           
           </BrowserRouter>

       </div>
    );
}


export default App;
