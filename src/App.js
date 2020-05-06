import React, { useState,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/CounterFuncional';
function App() {
  const [show, setShow] = useState(true)
  const [inicial, setinicial] = useState(10)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* ngIf */}
       {show && <Fragment>
        <Counter inicial={inicial}/>
        <Counter inicial={5}/>
       </Fragment>
        }
        <input type="number" onChange={(e)=>setinicial(+e.target.value)}/>
        <button onClick={()=>setShow(!show)}>Eliminar/mostrar counters</button>
      </header>
    </div>
  );
}

export default App;
