import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div >
    <Header />
      <div className='bg-red-500'>
       
          <img src={viteLogo} className="logo" alt="Vite logo" />
     
       
          <img src={reactLogo} className="logo react" alt="React logo" />
   
      </div>
      <h1 className='text-[#875764] text-9xl'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
