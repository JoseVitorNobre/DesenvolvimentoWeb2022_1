import React from "react";
import Filho from "./Filho";
const Pai = () =>{
    function msgSon(msg, grana){
        // alert("Recebi do meu filho: " + msg + " pediu emprestado: R$" + grana)
        alert(`Recebi do meu filho: ${msg} pediu emprestado: R$ ${grana}`)
    }

    return(
        <div>
            <Filho notificarPai={msgSon}/>
        </div>
    )
}
export default Pai;