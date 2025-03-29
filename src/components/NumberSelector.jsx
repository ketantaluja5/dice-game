import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {
    const arr=[1,2,3,4,5,6]
    const numberSelectorHandler = (num) => {
        setSelectedNumber(num)
        setError("")
    }
    
    
  return (
    
    <NumberSelectorContainer>
        <p className='errormessage'>{error}</p>
        <div className='flex'>
        {arr.map((item,index) => {
            return <Box $isselected = {item === selectedNumber ? true : undefined} value = {selectedNumber} key={index} onClick={() =>numberSelectorHandler(item)} >{item}</Box>
        })}
        </div>
        <p>Select a Number</p>   
    </NumberSelectorContainer>
  )
}

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 34px;
    font-weight: 700;
    background-color: ${(props) => (props.$isselected ? 'black' : 'white')};
    color: ${(props) => (props.$isselected ? 'white' : 'black')};
    cursor: pointer;

    @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 22px;
  }
`

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .errormessage{
        color: #d93232;
        font-size: 24px;
    }

    .flex{
        display: flex;
        gap: 24px;

        @media (max-width: 768px) {
      gap: 16px;
    }

    @media (max-width: 480px) {
      gap: 9px;
      flex-wrap: wrap;
      justify-content: center;
    }

    }

    p{
        font-size: 24px;
        font-weight: 700;

        @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }

    }

`

export default NumberSelector