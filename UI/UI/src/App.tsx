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
   <div>Redux Counter</div>
   <div>
    <h2>Increment</h2>
    <button>0</button>
   </div>
   
   <div>
    <h2>Decrement</h2>
    <button>0</button>
   </div>
   </>
  )
}

export default App
