import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, rollDiceFunction}) => {

    
    

  return (
    <DiceContainer  >
        <div onClick={rollDiceFunction} className='dice'>
            <img src= {`/images/dice/dice_${currentDice}.png`} />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    p {
       
        font-size: 24px;
        font-weight: 500;
        margin-top: 36px;

        @media (max-width: 768px) {
      font-size: 20px;
      margin-top: 100px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      margin-top: 120px;
    }
    }

    img{
        width: 200px;
        height: 200px;
    }

    .dice{
        cursor: pointer;
        display: flex;
        justify-content: center;

      width: 12rem;
      height: 12rem;

      @media (max-width: 768px) {
        width: 6rem;
        height: 6rem;
      }

      @media (max-width: 480px) {
        width: 80px;
        height: 80px;
      }

    }

    
`

export default RollDice