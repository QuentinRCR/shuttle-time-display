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
      
    </div>
  );
}

export default App;
