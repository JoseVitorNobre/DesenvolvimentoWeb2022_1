import React from "react";

const Filho = (props) =>{
    return(
        <div>
            <button className="buttonSon" onClick={
                ()=>{
                    // alert("Deu certo")
                    props.notificarPai('Eae pai firmeza?', 80)
                }
            }>
                Enviar mensagem pro meu pai
            </button>
        </div>
    )
} 
export default Filho;