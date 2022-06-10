import { Link } from "react-router-dom"
import React from "react"

const RestrictedPage = (props) =>{
    if(props.isLogged){
        return props.children
    }else{
        return(
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 30
            }}>
                <h3>Acesso restrito, por favor fazer login</h3>
                <Link to="/" className="nav-link">Efetuar Login</Link>
            </div>
        )
    }
}

export default RestrictedPage