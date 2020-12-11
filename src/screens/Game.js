import React, { useState } from 'react'
import GameBoard from '../components/GameBoard'
import whoIsWinner from '../Answer'
import ResetButton from '../components/ResetButton'




const Game = () => {
const [history, setHistory] = useState([Array(9).fill(null)]);
const [stepNumber, setStepNumber] = useState(0);
const [movementX, setXisinTheCharge] = useState(true);
const theRewardGoesTo = whoIsWinner(history[stepNumber]);
    const handleClick = (index) => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const fakeBoard = [...current];
         // kazanan true ise veya cevaplar yapıldıysa
        if (theRewardGoesTo || fakeBoard[index]) 
        {
            return;
        }
        
        fakeBoard[index] = movementX ? 'X' : 'O' ;
        setStepNumber(timeInHistory.length);
        setHistory([...timeInHistory, fakeBoard]);
        setXisinTheCharge(!movementX);
        
    };

    const goBackUrMoves = (step) => {
        setStepNumber(step);
        setXisinTheCharge(step % 2 === 0)
    };

    let status;
    if(theRewardGoesTo && theRewardGoesTo != 'draw'){
        status = 'Winner: ' + theRewardGoesTo;
        
    } else if (theRewardGoesTo && theRewardGoesTo === 'draw'){
        status = "It's a " + theRewardGoesTo;
        
           
    } else {
        status = 'Next player: ' + (movementX ? 'X' : 'O');
    }


     const returnBack = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}`: `Go to start`;
       
        return (
            <li key ={move}>
                <button onClick = {() => goBackUrMoves(move)}>{destination}</button>
            </li>
        )
       
      })
     );
    return (
        <>
        <GameBoard buttons = {history[stepNumber]} onClick = {handleClick}/>

         <div style = {style}>
    <p>{status}</p>
    {returnBack()}
   
   
         </div>
        </>
      
      
    )
}

const style = {
    width: '500px',
    margin: '30px auto',
}

export default Game
