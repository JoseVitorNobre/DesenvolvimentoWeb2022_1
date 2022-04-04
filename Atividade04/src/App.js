import React from 'react';
import './App.css';
import Arena from './components/Arena';
import Enemy from './components/Enemy';
import Hero from './components/Hero';
import Word from './components/Word';
const App = () =>{
    const spamtom = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAyYxatZyNB8AEEA8tszvTxVWV82KCu3REs2csRUkSVqEszmIFSJA3hIxl9PRoRBgYaQ&usqp=CAU';
    const kris = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0g3WcgFgvQjIc9d9fHS6q6J-Xml3hdmGSg&usqp=CAU';
    const frisk = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVfMv01q3978IFIQkDdWAmIIIp9b2he6JTQ&usqp=CAU';
    const flowey = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfaakKuLmJQwlzQ2FJWkOC4ZlRSd4KK0IMVae167VX4bLsFBYtVPNaOS8YrM-fcKpKf0&usqp=CAU';
    const hollow = 'https://animeka.club/wp-content/uploads/2021/04/hollow-knight_ZX03Vhr.jpg';
    const radiance = 'https://steamuserimages-a.akamaihd.net/ugc/93855430116984721/B2421B5E6F03ED08F761ACC57EB648B334DCC3CC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
    return(
      <div className='App'>
        <Word>
            <Arena arena="Underground">
                <Hero name="Kris" img={kris}/>
                <Enemy name="Spamtom NEO" img={spamtom}/>
            </Arena>
            <Arena arena="End Of the Underworld">
                <Hero name="Frisk" img={frisk}/>
                <Enemy name="Flowey" img={flowey}/>
            </Arena>
            <Arena arena="Pantheon Of Gods">
                <Hero name="Hollow Knight" img={hollow}/>
                <Enemy name="Radiance" img={radiance}/>
            </Arena>
        </Word>
        
      </div>
    )
}
export default App;
