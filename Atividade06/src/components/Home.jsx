import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FirebaseUserService from "../services/FireBaseUserService";
import FirebaseContext from "../utils/FirebaseContext";


const HomePage = (props) =>
    <FirebaseContext.Consumer>
        {(firebase) => <Home 
                            firebase={firebase} 
                            setLogged={props.setLogged} 
                            setToast={props.setToast}
                            setShowToast={props.setShowToast}
                            />}
    </FirebaseContext.Consumer>

function Home(props) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [validate, setValidate] = useState({login:'',password:''})
    const navigate = useNavigate()

    const validateFields = ()=> {
        let res = true
        setValidate({login:'',password:''})
        if(login === '' || password === ''){
            props.setToast({header:'Erro!',body:'Preencha todos os campos.'})
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = {login:'',password:''}
            if (login === '') validateObj.login = 'is-invalid'
            if (password === '') validateObj.password = 'is-invalid'
            setValidate(validateObj)
        }
        return res
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        if(!validateFields()) return
        //const user = { login, password }
        //console.log(user)
        FirebaseUserService.login(
            props.firebase.getAuthentication(),
            login,
            password,
            (user) => {
                if (user != null) {
                    //console.log(user.email)
                    props.firebase.setUser(user)
                    props.setLogged(true)
                    navigate('/listStudent')
                } else {
                    props.setToast({header:'Erro!',body:'Login e/ou Senha incorreto(s).'})
                    props.setShowToast(true) //mostre o toast!
                    setLoading(false)

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
    return (
        <div className="container-login" style={{marginTop:40}}>
            <main style={{width:'40%'}}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Login: </label>
                        <input type="text"
                            className={`form-control ${validate.login}`}
                            value={(login == null || login === undefined) ? "" : login}
                            name="login"
                            onChange={(event) => { setLogin(event.target.value) }} 
                            autoComplete="off"/>
                    </div>
                    <div className="form-group">
                        <label>Senha: </label>
                        <input type="password"
                            className={`form-control ${validate.password}`}
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