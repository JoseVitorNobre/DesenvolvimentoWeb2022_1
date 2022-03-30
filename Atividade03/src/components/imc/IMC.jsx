import React, { Component } from "react";

// const IMC = (props) =>{
//     const {altura, peso} = props;

//     function calcularIMC(altura, peso){
//         return peso/(altura*altura)
//     }
//     return(
//         <div>
//             <h3>A minha altura é {altura} 
//             &nbsp; e o meu peso é {peso}</h3>
//             <h3>O meu IMC é {calcularIMC(altura,peso)}</h3>
//         </div>
//     )
// }

class IMC extends Component{
    calcularIMC(altura,peso){
        return peso/(altura*altura)
    }
    classificacao(imc){
        if(imc < 18.5)
            return "Magreza";
        else if(imc < 24.9)
            return "IMC Ideal"
        else if(imc < 29.9)
            return "Sobrepeso"
        else if(imc < 39.9)
            return "Obesidade"
        else if(imc >= 40)
            return "Obesidade Grave"
    }
    render(){
        const {altura, peso} = this.props;
        return(
            <div>
                <h3>A minha altura é {altura} 
                &nbsp; e o meu peso é {peso}</h3>
                <h3>O meu IMC é {this.calcularIMC(altura,peso)}</h3>
                <h3>Classificação: {this.classificacao(this.calcularIMC(altura, peso))}</h3>
            </div>
        )
    }
}
export default IMC;