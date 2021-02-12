import logo from './logo.svg';
import './App.css';
import Greet from './components/hello'
import { Counter } from "./components/counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet />
        <Counter />
      </header>
    </div>
  );
}

export default App;
