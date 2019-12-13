import React, {useState} from 'react';
import './App.css';
import Display from './Display';
import S from 'styled-components';

function Dashboard() {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    const handleBalls = (event) => {
        event.preventDefault();
        if(balls < 3 ) {
            return setBalls(balls + 1);
        } else if(balls === 3) {
            setBalls(0);
            setStrikes(0);
        }
    }

    const handleStrikes = (event) => {
        event.preventDefault();
        if(strikes < 2) {
            return setStrikes(strikes + 1);
        } else {
             setStrikes(0);
             setBalls(0);
        }
    }

    const handleFoul = (event) => {
        event.preventDefault();
        if(strikes <= 1) {
            return setStrikes(strikes + 1);
        }
    }

    const handleHit = (event) => {
        event.preventDefault();
        setStrikes(0);
        setBalls(0);
    }

  return (
      <DashboardContainer>
          <Display  balls={balls} strikes={strikes}/>
          <Title>{'Dashboard'}</Title>
          <ButtonContainer>
          <PlayButton onClick={handleStrikes}>Strike</PlayButton>
          <PlayButton onClick={handleBalls}>Ball</PlayButton>
          <PlayButton onClick={handleFoul}>Foul</PlayButton>
          <PlayButton className={hit} onClick={handleHit}>Hit</PlayButton>
          </ButtonContainer>
      </DashboardContainer>
    
  );
}

export default Dashboard;

const DashboardContainer = S.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
`;
const Title = S.h2`
    font-size: 40px;
    width: 100%;
`;
const ButtonContainer = S.div`
    display: flex;
    flex-flow: row wrap;
    width: 60%;
    justify-content: space-around;
    margin: 0 auto;
`;
const PlayButton = S.button`
    width: 100px;
    border-radius: 25px;
    background-color: aqua;
    color: #000;
    font-size: 20px;
    padding: 10px;
`;