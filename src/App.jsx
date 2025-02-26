import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper' />
       <header>
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy</h1>
       </header>
    </main>
  )
}

export default App
