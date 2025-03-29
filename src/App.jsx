import styled from 'styled-components'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Game from './components/Game'
import { useState } from 'react'

const Button = styled.button`
  background-color: #000000;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;`

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)

  return (
    <div>
      {!isGameStarted ? (<Home setIsGameStarted = {setIsGameStarted} />) : (<Game />)}
    </div>
  )
}

export default App
