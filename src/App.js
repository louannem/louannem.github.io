import logo from './assets/undraw_code_thinking_re_gka2.svg';
import './utils/styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Underconstruction icon" className='App-logo' />
        <p>
          En cours de construction
        </p>
        <a
          className="App-link"
          href="github.com/louannem/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visiter mon  github
        </a>
      </header>
    </div>
  );
}

export default App;
