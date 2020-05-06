import React
, { useState, Fragment, useEffect, useRef }
 from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './containers/MovieList';
import Counter from './components/Counter';

const  App = () =>{
  const [show, setShow] = useState(true);
  const [initial, setInitial] = useState(10);
  const [step, setstep] = useState(5);
  const stepRef = useRef(null);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {show && <Fragment>
          {/* <Counter initial={5} step={5}/> */}
        </Fragment>
        }
        <input type="number" value={initial} placeholder="initial" onChange={(e) => setInitial(+e.target.value)} />
        <input type="number" ref={stepRef} value={step} placeholder="step" onChange={(e) => setstep(+e.target.value)} />
        <Counter initial={initial} step={step} stepRef={stepRef}>
            Esto son las props children
        </Counter>
        <button onClick={() => setShow(!show)}>Eliminar/mostrar counters</button>
        {/* <MovieList/> */}
      </header>
    </div>
  );
}

export default App;
