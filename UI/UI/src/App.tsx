import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/Features/Counter/counterSlice";



function App() {

const dispatch = useDispatch();
const {count} = useSelector((state) => state.counter);
//console.log(counter);
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
   <div>{count}</div>
  
    <button onClick={handleDecrement}>Decrement</button>
   </div>
   </>
  )
}

export default App
