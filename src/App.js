import logo from './logo.svg';
import './App.css';
import { Writer } from './components/textAdder'
import Counter from './components/inputCounter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
