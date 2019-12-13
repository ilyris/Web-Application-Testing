import React from 'react';
import './App.css';
import S from 'styled-components';

function Display(props) {
  return (
    <>
        <Title>Display</Title>
        <StateParagraph>Balls: {props.balls}</StateParagraph>
        <StateParagraph>Strikes: {props.strikes}</StateParagraph>
    </>
  );
}

export default Display;

const Title = S.h2`
    font-size: 40px;
    width: 100%;
`;
const StateParagraph = S.p`
    font-size: 18px;
    color: #000;
    width: 100%;
`;