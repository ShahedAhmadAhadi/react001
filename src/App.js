import logo from './logo.svg';
import './App.css';
// import { Writer } from './components/textAdder'
// import Counter from './components/inputCounter'
// import AddRemove from './components/AddRemove'
// import HookCounter from "./components/HooksFullCounter";
// import InputCounter from './components/HooksInputCounter';
// import AddRemoveH from './components/HookAddRemove'
import { UserProvider } from './context/context'

function App() {
  return (
    <UserProvider>

      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HookCounter />
        <InputCounter />
        <AddRemoveH />
      </header> */}

      </div>
    </UserProvider>
  );
}

export default App;
