import './App.scss';
import logoSFL from "./images/logoSFL.png";
import logoSFLMM from "./images/logoSFLMM.png";
import ChoiceRide from "./components/choiceRide"
import ResultBox from "./components/resultBox"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="LogoHeader">
          <img className='logoSFLMM' src={logoSFLMM} alt="Saint François Longchamps Montaimont Montgellafrey logo" />
          <img className='logoSFL' src={logoSFL} alt="Saint François Longchamps logo" />
        </div>
        <h1>Itinéraire - Ski-bus</h1>
        <hr />
      </header>
      <main className="main">
        <ChoiceRide></ChoiceRide>
        <hr />
        <ResultBox></ResultBox>
      </main>
      <footer>
        <hr />
        <a className='button' href="http://" target="_blank" rel="noopener noreferrer">Accéder à la fiche horaire</a>
        <p>Ces horaires pourront être adaptés en fonction des conditions d'exploitation (condition de circulation, météo...)</p>
      </footer>
      
    </div>
  );
}

export default App;
