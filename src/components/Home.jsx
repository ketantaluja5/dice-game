import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'



const Home = ({setIsGameStarted}) => {

    const handleToggle = () =>{
        setIsGameStarted((prevState) => !prevState)
    }

  return (
    <Container>
       <div>
       <img src='/images/dices.png' />
       </div>
       <div className='content'>
        <h1>
            DICE GAME
        </h1>
        <Button onClick={handleToggle}>Play Now</Button>
       </div>
    </Container>
  )
}

const Container = styled.div`
    max-width:1180px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    img{
      max-width: 100%;
      height: auto;
    }

    .content{
        h1{
            font-size:96px;
            white-space: nowrap;
        }
    }

    @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

      img{
        max-width: 80%;
      }

    .content {
      h1 {
        font-size: 48px;
      }
    }
  }

  @media (max-width: 480px) {

    img{
        max-width: 80%;
      }
    .content {
      h1 {
        font-size: 36px;
      }
    }
  }

`






export default Home