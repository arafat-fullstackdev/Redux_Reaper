import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const increment =() =>{
    setCount(count + 1);
  };

  const asynIncrement = () =>{
    setTimeout(() =>{
      setCount1(count1 + 1);
    }, 2000);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <p>Count: {count}</p>
        <button onClick={increment}>
          count is 
        </button>
       
      </div>

      <div className="card">
        <p>Count: {count1}</p>
        <button onClick={asynIncrement}>
          count is 
        </button>
       
      </div>
      
    </>
  )
}

export default App
