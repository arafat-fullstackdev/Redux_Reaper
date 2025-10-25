import { Button } from "@/components/ui/button"
import Watch from "./components/clock.js"



function App() {



  return (
   <>

   <Button>Test</Button>
   
    <div className="flex min-h-svh flex-col items-center justify-center">
           <Watch/> 
      <Button>Click me</Button>
    </div>

   
   </>
  )
}

export default App;
