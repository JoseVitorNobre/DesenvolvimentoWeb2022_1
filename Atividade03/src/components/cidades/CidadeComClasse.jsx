import React, { Component } from "react";

class CidadeComClasse extends Component{
    constructor(props){
        super(props)
        this.state = {fortal: 0, quixa:0, batur:0, quixe:0}
    }

    votar(cidade){
        switch(cidade){
            case 1:
                this.setState({fortal:this.state.fortal+1})
            break;
            case 2:
                this.setState({quixa:this.state.quixa+1})
            break;
            case 3:
                this.setState({batur:this.state.batur+1})
            break;
            case 4:
                this.setState({quixe:this.state.quixe+1})
            break;
            default:
                alert("Cidade Invalida")
        }
    }
    render(){
        // let fortal = 0, quixa = 0, batur = 0, quixe = 0
        return(
            <div>
                <h3>Fortaleza: {this.state.fortal}</h3>
                <h3>Quixada: {this.state.quixa}</h3>
                <h3>Baturite: {this.state.batur}</h3>
                <h3>Quixeramobim: {this.state.quixe}</h3>
                <div className="voteArea">
                    <button onClick={()=>this.votar(1)}>Votar em Fortaleza: </button>
                    <button onClick={()=>this.votar(2)}>Votar em Quixada: </button>
                    <button onClick={()=>this.votar(3)}>Votar em Baturite: </button>
                    <button onClick={()=>this.votar(4)}>Votar em Quixeramobim: </button>
                </div>
            </div>
        )
    }
}

export default CidadeComClasse;