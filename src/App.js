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
import ComponentB from './CompR/ComponentB';
import ComponentF from './CompR/ComponentF';
import ComponentE from './CompR/ComponentE';
import ComponentD from './CompR/ComponentD';

function App() {

  const [count, setCount] = useState(0)

  const updateValue = () => {
    setCount(count + 1)
  }
  console.log(count)

  return (
    <UserProvider value={count}>

      <div className="App">
        <ComponentA/>
        <ComponentB/>
        <ComponentD/>
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
