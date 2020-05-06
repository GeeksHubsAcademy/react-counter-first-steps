import React
// , { useState, Fragment }
 from 'react';
// import logo from './logo.svg';
import './App.css';
import MovieList from './containers/MovieListClass';
// import Counter from './components/Counter';

function App() {
  // const [show, setShow] = useState(true)
  // const [inicial, setinicial] = useState(10)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        {show && <Fragment>
          <Counter inicial={inicial} />
          <Counter inicial={5} />
        </Fragment>
        }
        <input type="number" onChange={(e) => setinicial(+e.target.value)} />
        <button onClick={() => setShow(!show)}>Eliminar/mostrar counters</button> */}
        <MovieList/>
      </header>
    </div>
  );
}

export default App;
