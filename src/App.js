import Timer from './timer/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Counter Timer with React JS</h1>
      <Timer duration={2 * 24 * 60 * 60 * 1000}/>
    </div>
  );
}

export default App;
