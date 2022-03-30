import React, { Component } from "react";
// class Questao2 extends Component{
//     render(){
//         return(
//         <div>
//             <h3>Nome: José Vitor de Oliveira Nobre</h3>
//             <h3>Curso: Engenharia de Software</h3>
//             <h3>Cidade de Origem: Fortaleza</h3>
//         </div>
//         )
//     }
// }
// class Questao2 extends Component{
//     //Não é 100% necessario aqui
//     constructor(props){
//         super(props)
//     }

//     render(){
//         const {nome, curso, cidOri} = this.props
//         return(
//         <div>
//             <h3>Nome: {nome}</h3>
//             <h3>Curso: {curso}</h3>
//             <h3>Cidade de Origem: {cidOri}</h3>
//         </div>
//         )
//     }
// }
class Questao2 extends Component{
    render(){
        return(
        <div>
            <h3>Nome: {this.props.nome}</h3>
            <h3>Curso: {this.props.curso}</h3>
            <h3>Cidade de Origem: {this.props.cidOri}</h3>
        </div>
        )
    }
}
export default Questao2