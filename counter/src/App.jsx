import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   let [Counter,SetCouner]=useState(15);
   const addValue= () =>{
    // Counter=Counter + 1;
    SetCouner(Counter+1);
   }

   const removeValue = () =>{
    SetCouner(Counter-1);
   }
  return (
    <>
       <h1>Hello world</h1>

       <h2>Counter: {Counter}</h2>
       <button onClick={addValue}>Add value {Counter}</button>
       <br></br>
       <button onClick={removeValue}>Remove value {Counter}</button>
       <p>footer: {Counter}</p>
    </>
  )
}

export default App
