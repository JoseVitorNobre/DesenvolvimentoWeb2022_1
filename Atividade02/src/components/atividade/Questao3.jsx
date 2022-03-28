import React from "react";
// const Questao3 = (props) =>{
//     return(
//         <div>
//             <h3>Nome: {props.nome}</h3>
//             <h3>Curso: {props.curso}</h3>
//             <h3>Cidade de Origem: {props.cidOri}</h3>
//         </div>
//     )
// }

const Questao3 = (props) =>{
    const {nome,curso, cidOri} = props;
    return(
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Curso: {curso}</h3>
            <h3>Cidade de Origem: {cidOri}</h3>
        </div>
    )
}
export default Questao3