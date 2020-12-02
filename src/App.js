import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import EffectFunc from './components/effectFunc';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h2>Counter</h2>
        <Counter></Counter>
        <h2>EffectFunc</h2>
        <EffectFunc></EffectFunc>
      </header>
    </div>
  );
}

export default App;
