import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  // let counter = 15;

  const addValue = ()=>{
    
    
    if(counter <= 19){
      setCounter(counter + 1)
      console.log("Clicked",counter);

    }
  }

  const removeValue = () =>{

    if (counter >= 1){
    setCounter (counter-1)
    console.log("Removed",counter);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
