import './App.css';
// import { Writer } from './components/textAdder'
// import Counter from './components/inputCounter'
// import AddRemove from './components/AddRemove'
// import HookCounter from "./components/HooksFullCounter";
// import InputCounter from './components/HooksInputCounter';
// import AddRemoveH from './components/HookAddRemove'
import { UserProvider } from './context/context'
import { useReducer, useState } from 'react'
import ComponentA from './CompF/ComponentA';
import ComponentB from './CompF/ComponentB';
import ComponentD from './CompF/ComponentD';
import Request from './CompR/request';
import React from 'react'

export const CountContext = React.createContext()

  const initialState = 0
  const reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      case 'reset':
        return initialState
      default:
        return state
    }
  }

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{count: count, updateCount: dispatch}}>

      <div className="App">
        <ComponentA/>
        <ComponentB/>
        <ComponentD/>
        {/* <button onClick={() => updateValue()}>click</button> */}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HookCounter />
        <InputCounter />
        <AddRemoveH />
      </header> */}
      <Request />
      </div>
    </CountContext.Provider>
  );
}

export default App;
