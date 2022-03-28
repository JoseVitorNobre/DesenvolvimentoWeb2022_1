import React, { Component } from "react";

class Informacoes extends Component{
    render(){
        return (
            <div>
                <h3>Nome: {this.props.nome}</h3>
                <h3>Curso: {this.props.curso}</h3>
                <h3>Turma: {this.props.turma}</h3>
                <h3>Campus: {this.props.campus}</h3>
            </div>
        )
    }
}

export default Informacoes;