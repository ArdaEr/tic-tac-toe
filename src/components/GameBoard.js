import React from 'react';
import GameButton from './GameButton';
import whoisWinner from '../Answer';



const GameBoard = ({ buttons, onClick }) => (
    <div style = {style}>
        {buttons.map((button, index) => (

             <GameButton key = {index} value = {button} onClick ={() => onClick(index)} />   
             
        ))}
    </div>
)
const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

export default GameBoard;