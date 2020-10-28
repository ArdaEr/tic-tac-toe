import React, { useState } from 'react'
import GameBoard from '../components/GameBoard'
import whoIsWinner from '../Answer'
import ResetButton from '../components/ResetButton'




const Game = () => {
const [board, setBoard] = useState(Array(9).fill(null));
const [movementX, setXisinTheCharge] = useState(true);
const theRewardGoesTo = whoIsWinner(board);
    const handleClick = (index) => {

        const fakeBoard = [...board];
         // kazanan true ise veya cevaplar yapıldıysa
        if (theRewardGoesTo || fakeBoard[index]) 
        {
            return;
        }
        

        fakeBoard[index] = movementX ? 'X' : 'O' ;
        setBoard(fakeBoard);
        setXisinTheCharge(!movementX);
        
    }
    
  

    let status;
    if(theRewardGoesTo && theRewardGoesTo != 'draw'){
        status = 'Winner: ' + theRewardGoesTo;
        
    } else if (theRewardGoesTo && theRewardGoesTo === 'draw'){
        status = "It's a " + theRewardGoesTo;
        
           
    } else {
        status = 'Next player: ' + (movementX ? 'X' : 'O');
    }

    const returnBack = () => {
        
        setBoard(Array(9).fill(null));
        setXisinTheCharge("X");
       
      };

    
   
 
    return (
        <>
        <GameBoard buttons = {board} onClick = {handleClick}/>

       
        <div style = {style}>
    <p>{status}</p>
    <p><ResetButton onClick = {returnBack} /></p>

        </div>
     
        </>
        /* */
        //     theRewardGoesTo ? 'Winner: '  + theRewardGoesTo : 'Your Turn: ' + (movementX ? 'X' : 'O')
        //     {returnBack()}
        //    `TheChamp: ${theRewardGoesTo} Your Turn: ${(movementX ? 'X' : 'O')}`
    )
}

const style = {
    width: '500px',
    margin: '30px auto',
}

export default Game
