import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FirebaseUserService from "../services/FireBaseUserService";
import FirebaseContext from "../utils/FirebaseContext";

import MyToast from '../utils/MyToast';

const HomePage = (props) =>
<FirebaseContext.Consumer>
    {(firebase)=><Home firebase={firebase} setLogged={props.setLogged}/>}
</FirebaseContext.Consumer>

function Home(props) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        //const user = { login, password }
        //console.log(user)
        FirebaseUserService.login(
            props.firebase.getAuthentication(),
            login,
            password,
            (user)=>{
                if(user != null){
                    //console.log(user.email)
                    props.firebase.setUser(user)
                    props.setLogged(true)
                    navigate('/listStudent')
                }else{
                    setLoading(false)
                    setShowToast(true)
                }
            }
        )
    }
    const renderSubmitButton = () =>{
        if(loading){
            return(
                <div style={{paddingTop: 20}}>
                    <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span class="sr-only" style={{paddingLeft: 5 }}>Carregando...</span>
                    </button>
                </div>
            )
        }else{
            return(
                <div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Efetuar Login" className="btn btn-primary" />
                    </div>
                </div>
            )
        }
    }
    const renderToast = () => {
        return <MyToast
            show={showToast}
            header='Erro!'
            body='Login e/ou Senha incorreto(s).'
            setShowToast={setShowToast}
            bg='warning'
        />
    }
    return (
        <div className="container-login" style={{marginTop:40}}>
            {renderToast()}
            <main style={{width:'40%'}}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Login: </label>
                        <input type="text"
                            className="form-control"
                            value={(login == null || login === undefined) ? "" : login}
                            name="login"
                            onChange={(event) => { setLogin(event.target.value) }} 
                            autoComplete="off"/>
                    </div>
                    <div className="form-group">
                        <label>Senha: </label>
                        <input type="password"
                            className="form-control"
                            value={(password == null || password === undefined) ? "" : password}
                            name="password"
                            onChange={(event) => { setPassword(event.target.value) }}
                            autocomplete="off" />
                    </div>
                    {renderSubmitButton()}
                </form>
            </main>
        </div>
    );
}

export default HomePage