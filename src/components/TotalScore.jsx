import React from 'react'
import styled from 'styled-components'
const TotalScore = ({totalScore}) => {
  return (
    <ScoreContainer>
        <h1>{totalScore}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
    h1{
        font-size: 100px;
        line-height: 100px;

        /* @media (max-width: 768px) {
      font-size: 80px;
      line-height: 80px;
    } */

    /* @media (max-width: 480px) {
      font-size: 60px;
      line-height: 60px;
    } */
    }
    p{
        font-size: 24px;
        font-weight: 500;

        @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
    }
`

export default TotalScore