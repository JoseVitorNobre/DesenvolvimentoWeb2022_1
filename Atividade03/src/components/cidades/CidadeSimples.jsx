import React from "react";

const CidadeSimples = () =>{
    let fortal = 0, quixa = 0, batur = 0, quixe = 0
    return(
        <div>
            <h3>Fortaleza: {fortal}</h3>
            <h3>Quixada: {quixa}</h3>
            <h3>Baturite: {batur}</h3>
            <h3>Quixeramobim: {quixe}</h3>
            <div className="voteArea">
                <button onClick={()=>fortal++}>Votar em Fortaleza: </button>
                <button onClick={()=>quixa++}>Votar em Quixada: </button>
                <button onClick={()=>batur++}>Votar em Baturite: </button>
                <button onClick={()=>quixe++}>Votar em Quixeramobim: </button>
            </div>
        </div>
    )
}

export default CidadeSimples;