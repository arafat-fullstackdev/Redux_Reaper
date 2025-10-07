import { useDispatch } from "react-redux";
import { decrement, increment } from "./Redux/Features/Counter/counterSlice";



function App() {

const dispatch = useDispatch();
const handleIncrement = ()=>{
  dispatch(increment());
}
const handleDecrement = ()=>{
  dispatch(decrement());
}

  return (
   <>
   <div>
   <div>Redux Counter</div>
   
   
    <button onClick={handleIncrement}>Increment</button>
   <div>0</div>
  
    <button onClick={handleDecrement}>Decrement</button>
   </div>
   </>
  )
}

export default App
