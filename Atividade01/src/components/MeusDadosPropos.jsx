import React, { Component } from "react";

// const MeusDadosProps = (props) => {
//     return(
//         <div>
//             <h3>Nome: {props.nome}</h3>
//             <h3>Curso: {props.curso}</h3>
//         </div>
//     )
// }

class MeusDadosProps extends Component{
    render(){
        return(
            <div>
                <h3>Nome: {this.props.nome}</h3>
                <h3>Curso: {this.props.curso}</h3>
            </div> 
        )
    }
}
export default MeusDadosProps