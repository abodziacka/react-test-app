import logo from './logo.svg';
import './App.css';

function App() {
  const handleShowAlert = () => {
    alert("Hello react")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleShowAlert}>Hello React</button>
        <a href="https://github.com/abodziacka/react-test-app" style={{color: "pink"}}>Link do Github</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
