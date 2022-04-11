import React, {Component, useState, useEffect} from "react";

const Contador = () =>{
    const [contador,setContador] = useState(0);
    const [status,setStatus] = useState('PAR');

    useEffect(
        ()=>{
            (contador % 2 != 0) ? setStatus('IMPAR'): setStatus('PAR')  
        }, [contador]
    )

    return(
        <div>
            <h2>Valor do contador: {contador}</h2>
            <h2>Par ou Impar?: {status}</h2>
            <button onClick={
                ()=> setContador(contador+1)
                
            } className="buttonSon">
                Aumentar Contador
            </button>
        </div>
    )
}

// class Contador extends Component{
//     constructor(props){
//         super(props)
//         this.state = {contador:0}
//     }

//     render(){
//         return(
//             <div>
//                 <h2>Valor do contador: {this.state.contador}</h2>
//                 <button onClick={
//                     ()=> this.setState({contador:this.state.contador+1})
//                 } className="buttonSon">
//                     Aumentar Contador
//                 </button>
//             </div>
//         )
//     }
// }

export default Contador;