import './App.css';
import { Changelog } from './components/Changelog';

import logs from './data/records.json';

function App() {
  return (
    <div className="App">
      <div className="Intro">
        <h1>Changelog</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          repellat nulla pariatur fugit odit labore, laudantium consequuntur
          magnam tempore distinctio minima quam dolores.
        </p>
      </div>
      <Changelog logs={logs} />
    </div>
  );
}

export default App;
