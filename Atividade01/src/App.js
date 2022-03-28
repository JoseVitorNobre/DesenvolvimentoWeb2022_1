import React from 'react';
import './App.css';

import Questao1 from './components/atividade/Questao1';
import Questao2 from './components/atividade/Questao2';
import Questao4 from './components/atividade/Questao4';

function App() {
  return (
    <div className="App">
      <Questao1/>
      <Questao2 
        nome="José Vitor" 
        curso="Engenharia de Software" 
        cidOri="Fortaleza"/>
      <Questao4/>
    </div>
  );
}

export default App;
