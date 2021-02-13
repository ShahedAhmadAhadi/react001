import logo from './logo.svg';
import './App.css';
import { Writer } from './components/textAdder'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Writer />
      </header>
    </div>
  );
}

export default App;
