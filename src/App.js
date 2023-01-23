import './App.scss';
import logoSFL from "./images/logoSFL.png";
import logoSFLMM from "./images/logoSFLMM.png";
import ChoiceRide from "./components/choiceRide"
import ResultBox from "./components/resultBox"

function App() {
  let listStopDetails = [[
    {
        "stop": "Le Planet",
        "stopTime": "23:30"
    },
    {
        "stop": "L'Epalud",
        "stopTime": "23:32"
    },
    {
        "stop": "Edelweiss",
        "stopTime": "23:34"
    },
    {
        "stop": "ATC",
        "stopTime": "23:36"
    },
    {
        "stop": "Roc Noir / Mairie",
        "stopTime": "23:38"
    },
    {
        "stop": "Les Longues",
        "stopTime": "23:40"
    },
    {
        "stop": "La Madeleine",
        "stopTime": "23:42"
    },
    {
        "stop": "La Lauzière",
        "stopTime": "23:44"
    }
],[{
  "stop": "Les Longues",
  "stopTime": "23:40"
},
{
  "stop": "La Madeleine",
  "stopTime": "23:42"
},
{
  "stop": "La Lauzière",
  "stopTime": "23:44"
}]];
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
        {listStopDetails?.map((stopDetails)=> 
          <ResultBox stopDetails={stopDetails}></ResultBox>
        )};
        
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
