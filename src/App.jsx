import logo from './logo.svg';
import './App.css';
import { loadWasm } from './webAssembly/wasm-loader';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    loadWasm().then((wasmModule) => {
      const a = 5;
      const b = 10;
      const sum = wasmModule.add(a, b);
      console.log('sum: ', sum)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


