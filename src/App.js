import logo from './logo.svg';
import './App.css';
import FullCounter from './components/FullCounter'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FullCounter />
      </header>
    </div>
  );
}

export default App;
