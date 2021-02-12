import logo from './logo.svg';
import './App.css';
import Greet from './components/hello'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet />
      </header>
    </div>
  );
}

export default App;
