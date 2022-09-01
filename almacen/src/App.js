import logo from './logo.svg';
import './App.css';

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
      </header>
    </div>
  );
}

export default App;

const URL ='https://api.thecatapi.com/v1/images/search';

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.getElementById("randomCats");
        img.src = data[0].url
    });