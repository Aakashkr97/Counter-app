
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

    //.......Using arrow function........
   // const Increment = () =>{
   //   setCount(count+1)
   // }
   // const Decrement = () => {
   //   setCount(count-1)
   // }

  return (
    <div className="App">
      <header>
        <h1>Counter App</h1>
      </header>
      <h2>Value: {count}</h2>
      <div className="button-container">
        <button onClick={() => setCount(0)}>Reset</button>

        {/* .......using conditional logic........ */}
        <button onClick={() => count < 15 && setCount(count + 1)}>Increment</button>
        <button onClick={() => count > 0 && setCount(count - 1)}>Decrement</button>

        {/* ......Using ternery operator.......
           <button onClick={() => count >=15 ? "" : setCount(count+1)}>Increment</button>
          <button onClick={() => count <=0 ? "" : setCount(count-1)}>Decrement</button> */}

      </div>
    </div>
  );
}

export default App;

