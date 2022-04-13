import React from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
// Criamos 2 pastas + 3 arquivos
import CreateStudent from './components/crud/students/CreateStudent';
import ListStudent from './components/crud/students/ListStudent';
import EditStudent from './components/crud/students/EditStudent';
// Removemos o Page1 e o Page2 e no lugar colocamos os CreateStudent, ListStudent etc.
// import Page1 from './components/Page1';
// import Page2 from './components/Page2';
const App = () =>{
    return(
        <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link to="/" className="navbar-brand" style={{paddingLeft:20}}>UFC</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="navitem"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="navitem"><Link to="about" className="nav-link">Sobre</Link></li>
                        <li className="navitem"><Link to="createStudent" className="nav-link">Criar Estudante</Link></li>
                        <li className="navitem"><Link to="listStudent" className="nav-link">Listar Estudante</Link></li>
                        {/* Não criamos o li do editStudent pq ele vai ser chamado no listStudent */}
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="createStudent" element={<CreateStudent/>} />
                <Route path="listStudent" element={<ListStudent/>} />
                <Route path="editStudent/:id" element={<EditStudent/>} />
            </Routes>
      </div>
    )
}
export default App;
