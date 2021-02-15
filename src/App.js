import logo from './logo.svg';
import './App.css';
import { Writer } from './components/textAdder'
import Counter from './components/inputCounter'
import AddRemove from './components/AddRemove'
import HookCounter from "./components/HooksFullCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HookCounter />
      </header>
    </div>
  );
}

export default App;
