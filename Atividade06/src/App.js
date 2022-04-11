import React from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
const App = () =>{
    return(
        <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link to="/" className="navbar-brand" style={{paddingLeft:20}}>UFC</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="navitem"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="navitem"><Link to="about" className="nav-link">Sobre</Link></li>
                        <li className="navitem"><Link to="page1" className="nav-link">Pagina 1</Link></li>
                        <li className="navitem"><Link to="page2/Vitor" className="nav-link">Pagina 2</Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="page1" element={<Page1/>} />
                <Route path="page2/:nome" element={<Page2/>} />
            </Routes>
      </div>
    )
}
export default App;
