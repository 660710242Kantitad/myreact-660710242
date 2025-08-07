import logo from './logo.svg';
import './App.css';
import Hello from './้Hello';
import Goodbye from './Goodbye';

function App() {
  return (
    <div className="App">
      <Hello />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello This is my React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Goodbye/>
    </div>
  );
}

export default App;