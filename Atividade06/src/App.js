import React, { useState } from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';

import CreateStudent from './components/crud/students/CreateStudent';
import ListStudent from './components/crud/students/ListStudent';
import EditStudent from './components/crud/students/EditStudent';

import CreateTeacher from './components/crud/teacher/CreateTeacher';
import ListTeacher from './components/crud/teacher/ListTeacher';
import EditTeacher from './components/crud/teacher/EditTeacher';

import FirebaseContext from "./utils/FirebaseContext";
import FirebaseUserService from "./services/FireBaseUserService";

import MyToast from './utils/MyToast';

import { NavDropdown } from 'react-bootstrap';

const AppPage = () =>
    <FirebaseContext.Consumer>
        {(firebase) => <App firebase={firebase} />}
    </FirebaseContext.Consumer>

function App(props) {
    const [logged, setLogged] = useState(false)
    const [showToast, setShowToast] = useState(false);
    const [toast,setToast] = useState({header:'',body:''})

    const navigate = useNavigate()

    const renderUserLogoutButton = () => {
        if (props.firebase.getUser() != null)
            return (
                <div style={{ marginRight: 20, color: "white" }}>
                    Olá, {props.firebase.getUser().email}
                    <button className='btn btn-warning' style={{ marginLeft: 10 }} onClick={() => logout()} >Logout</button>
                </div>
            )
        return
    }

    const renderToast = ()=> {
        return <MyToast
          show = {showToast}
          header = {toast.header}
          body = {toast.body}
          setShowToast = {setShowToast}
          bg = 'secondary'
        />
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
                        <li className="navitem"><Link to="/" className="nav-link">Login</Link></li>
                        <li className="navitem"><Link to="signup" className="nav-link">Cadastro</Link></li>
                        <NavDropdown title="Estudante" id="navbarScrollingDropdown">
                            <NavDropdown.Item><Link to="createStudent" className="btn" style={{ paddingLeft: 0 }}>Criar Estudante</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="listStudent" className="btn" style={{ paddingLeft: 0 }}>Listar Estudante</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Professor" id="navbarScrollingDropdown">
                            <NavDropdown.Item><Link to="createTeacher" className="btn" style={{ paddingLeft: 0 }}>Criar Professor</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="listTeacher" className="btn" style={{ paddingLeft: 0 }}>Listar Professor</Link></NavDropdown.Item>
                        </NavDropdown>
                    </ul>
                </div>
                {renderUserLogoutButton()}
                {renderToast()}
            </nav>
            <Routes>
                <Route path="/" element={<Home setLogged={setLogged} setToast={setToast} setShowToast={setShowToast}/>} />
                <Route path="about" element={<About />} />
                <Route path="signup" element={<SignUp setLogged={setLogged} setToast={setToast} setShowToast={setShowToast}/>} />
                

                <Route path="createStudent" element={<CreateStudent setToast={setToast} setShowToast={setShowToast}/>} />
                <Route path="listStudent" element={<ListStudent setToast={setToast} setShowToast={setShowToast}/>} />
                <Route path="editStudent/:id" element={<EditStudent setToast={setToast} setShowToast={setShowToast}/>} />

                <Route path="createTeacher" element={<CreateTeacher setToast={setToast} setShowToast={setShowToast}/>} />
                <Route path="listTeacher" element={<ListTeacher setToast={setToast} setShowToast={setShowToast}/>} />
                <Route path="editTeacher/:id" element={<EditTeacher setToast={setToast} setShowToast={setShowToast}/>} />
            </Routes>
        </div>
    )
}
export default AppPage;
