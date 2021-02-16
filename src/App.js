import logo from './logo.svg';
import './App.css';
import { Writer } from './components/textAdder'
import Counter from './components/inputCounter'
import AddRemove from './components/AddRemove'
import HookCounter from "./components/HooksFullCounter";
import InputCounter from './components/HooksInputCounter';
import AddRemoveH from './components/HookAddRemove'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HookCounter /> */}
        {/* <InputCounter /> */}
        <AddRemoveH />
      </header>
    </div>
  );
}

export default App;
