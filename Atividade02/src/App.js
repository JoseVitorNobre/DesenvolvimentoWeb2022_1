import React from 'react';
import './App.css';
/*
import Questao1 from './components/atividade/Questao1';
import Questao2 from './components/atividade/Questao2';
import Questao4 from './components/atividade/Questao4';
*/
// import Casa from './components/hardcode/Casa';
// import Personagem from './components/hardcode/Personagem';
import IMC from './components/imc/IMC';
// function App() {
//   return (
//     <div className="App">
//       <Casa show="Game Of thrones" casa="Casa generica" horario="Nobre">
//         <Personagem nome="Arya"/>
//         <Personagem nome="Tirion"/>
//         <Personagem nome="Robert"/>
//       </Casa>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <IMC altura={1.75} peso={80}/>
    </div>
  );
}

export default App;
