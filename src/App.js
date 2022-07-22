import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";
import Board from "./components/Board";

function App() {
  const [view, setView] = useState('welcome')

  return (
    <div className="App">
        <h1>Tic Tac Toe</h1>
        {
          view === 'welcome' ?
          <Welcome setView={setView}/>
          :
          <Board setView={setView} view={view}/>
        }
      
    </div>
  );
}

export default App;