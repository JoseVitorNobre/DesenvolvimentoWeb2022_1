import React from "react";
import { Link, useParams } from "react-router-dom";

const Page2 = () =>{
    let params = useParams();
    return(
        <div>
            Pagina parte 2
            <h3>Nome: {params.nome}</h3>
            <Link to="/">Voltar para home</Link>
        </div>
    )
}
export default Page2;