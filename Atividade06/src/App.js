import React, {useState} from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';

import CreateStudent from './components/crud/students/CreateStudent';
import ListStudent from './components/crud/students/ListStudent';
import EditStudent from './components/crud/students/EditStudent';

import CreateTeacher from './components/crud/teacher/CreateTeacher';
import ListTeacher from './components/crud/teacher/ListTeacher';
import EditTeacher from './components/crud/teacher/EditTeacher';

import FirebaseContext from "./utils/FirebaseContext";
import FirebaseUserService from "./services/FireBaseUserService";

import { NavDropdown } from 'react-bootstrap';

const AppPage = () =>
  <FirebaseContext.Consumer>
    {(firebase) => <App firebase={firebase} />}
  </FirebaseContext.Consumer>

function App(props){
  const [logged, setLogged] = useState(false)
  const navigate = useNavigate()

  const renderUserLogoutButton = () => {
    if (props.firebase.getUser() != null)
      return (
    	<div style={{ marginRight: 20 }}>
          Olá, josevitortinf@gmail.com
          <button className='btn btn-warning' style={{ marginLeft: 10 }} onClick={() => logout()} >Logout</button>
        </div>
      )
    return
  }

  const logout = () => {
    if (props.firebase.getUser() != null) {
      FirebaseUserService.logout(
        props.firebase.getAuthentication(),
        (res) => {
          if (res) {
            props.firebase.setUser(null)
            setLogged(false)
            navigate('/')
          }
        }
      )
    }
  }

  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to="/" className="navbar-brand" style={{ paddingLeft: 20 }}>CRUD</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem"><Link to="/" className="nav-link">Home</Link></li>
            <li className="navitem"><Link to="about" className="nav-link">Sobre</Link></li>
            <NavDropdown title="Estudante" id="navbarScrollingDropdown">
              <NavDropdown.Item><Link to="createStudent" className="btn" style={{ paddingLeft: 0 }}>Criar Estudante</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="listStudent" className="btn" style={{ paddingLeft: 0 }}>Listar Estudante</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Professor" id="navbarScrollingDropdown">
              <NavDropdown.Item><Link to="createTeacher" className="btn" style={{ paddingLeft: 0 }}>Criar Professor</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="listTeacher" className="btn" style={{ paddingLeft: 0 }}>Listar Professor</Link></NavDropdown.Item>
            </NavDropdown>
            {/* Não criamos o li do editStudent pq ele vai ser chamado no listStudent */}
          </ul>
        </div>
        {renderUserLogoutButton()}
      </nav>
      <Routes>
        <Route path="/" element={<Home setLogged={setLogged} />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        <Route path="createTeacher" element={<CreateTeacher />} />
        <Route path="listTeacher" element={<ListTeacher />} />
        <Route path="editTeacher/:id" element={<EditTeacher />} />
      </Routes>
    </div>
  )
}
export default AppPage;
