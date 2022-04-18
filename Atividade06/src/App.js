import React from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import CreateStudent from './components/crud/students/CreateStudent';
import ListStudent from './components/crud/students/ListStudent';
import EditStudent from './components/crud/students/EditStudent';
import CreateTeacher from './components/crud/teacher/CreateTeacher';
import ListTeacher from './components/crud/teacher/ListTeacher';
import EditTeacher from './components/crud/teacher/EditTeacher';
import { NavDropdown } from 'react-bootstrap';
const App = () =>{
    return(
        <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link to="/" className="navbar-brand" style={{paddingLeft:20}}>UFC</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="navitem"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="navitem"><Link to="about" className="nav-link">Sobre</Link></li>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <li className="navitem"><Link to="createStudent" className="nav-link">Criar Estudante</Link></li>
                        <li className="navitem"><Link to="listStudent" className="nav-link">Listar Estudante</Link></li>
                        <li className="navitem"><Link to="createTeacher" className="nav-link">Criar Professor</Link></li>
                        <li className="navitem"><Link to="listTeacher" className="nav-link">Listar Professor</Link></li>
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
                <Route path="createTeacher" element={<CreateTeacher/>} />
                <Route path="listTeacher" element={<ListTeacher/>} />
                <Route path="editTeacher/:id" element={<EditTeacher/>} />
            </Routes>
      </div>
    )
}
export default App;
