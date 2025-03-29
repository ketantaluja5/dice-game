import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import {useState} from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const Game = () => {

  const [totalScore, setTotalScore] = useState(0)
  const [currentDice, setCurrentDice] = useState(1)
  const [selectedNumber, setSelectedNumber] = useState()
  const [error, setError] = useState("")
  const [showrules, setShowRules] = useState(false)

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random()*6) + 1
    console.log(randomNumber)
    return randomNumber
}

const rollDiceFunction = () => {
    if(!selectedNumber){
        setError("Please select a number")
        return
      }
      setError("")
    const randomNumber = generateRandomNumber()
    setCurrentDice((prev) => randomNumber)
    if(randomNumber === selectedNumber){
        setTotalScore((prev) => prev + randomNumber)
    }
    else{
      setTotalScore((prev) => prev - 1)
    }
    setSelectedNumber()
}

  return (
    <MainContainer>
        <div className='top_section'>
        <TotalScore totalScore = {totalScore} />
        <NumberSelector setError = {setError} error = {error} selectedNumber ={selectedNumber} setSelectedNumber = {setSelectedNumber} />
        </div>
        <RollDice currentDice = {currentDice} rollDiceFunction = {rollDiceFunction} />
        <div className='btns'>
          <OutlineButton onClick={()=>setTotalScore(0)}>Reset Score</OutlineButton>
          <Button onClick={()=>setShowRules((prev)=> !prev)}>{showrules ? "Hide" : "Show"} Rules</Button>
        </div>
        {showrules && <Rules />}
        
    </MainContainer>
  )
}

const MainContainer = styled.main`

    padding-top: 70px;
    

    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;

        @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    @media (max-width: 480px) {
      gap: 16px;
    }
    }

    .btns{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 40px;

      @media (max-width: 768px) {
      gap: 8px; /* Reduce gap for smaller screens */
      margin-top: 40px; /* Adjust margin for better spacing */
    }

    @media (max-width: 480px) {
      gap: 6px; /* Further reduce gap for very small screens */
      margin-top: 40px;
    }

    button {
      width: 100%; /* Ensure buttons take full width on smaller screens */
      max-width: 200px; /* Limit the maximum width */
      text-align: center;

      @media (max-width: 480px) {
        max-width: 150px; /* Reduce max width for very small screens */
      }
    }
    }
`



export default Game