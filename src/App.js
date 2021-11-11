import './App.css';
// import { Writer } from './components/textAdder'
// import Counter from './components/inputCounter'
// import AddRemove from './components/AddRemove'
// import HookCounter from "./components/HooksFullCounter";
// import InputCounter from './components/HooksInputCounter';
// import AddRemoveH from './components/HookAddRemove'
import { UserProvider } from './context/context'
import { useState } from 'react'
import ComponentA from './CompR/ComponentA';
import ComponentC from './CompR/ComponentC';

function App() {

  const [count, setCount] = useState(0)

  const updateValue = () => {
    setCount(count + 1)
  }
  console.log(count)

  return (
    <UserProvider value={count}>

      <div className="App">
        <ComponentA />
        <ComponentC />
        <button onClick={() => updateValue()}>click</button>
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
