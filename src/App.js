import './App.css';
// import { Writer } from './components/textAdder'
// import Counter from './components/inputCounter'
// import AddRemove from './components/AddRemove'
// import HookCounter from "./components/HooksFullCounter";
// import InputCounter from './components/HooksInputCounter';
// import AddRemoveH from './components/HookAddRemove'
import { UserProvider } from './context/context'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const updateValue = () => {
    setCount(count + 1)
  }

  return (
    <UserProvider value={count} updateValue={updateValue}>

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
