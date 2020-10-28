import React, { useState } from 'react'
import GameBoard from '../components/GameBoard'
import whoIsWinner from '../Answer'




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
        <button onClick = {() =>setBoard(Array(9).fill(null))}> New Game</button>
    } else if (theRewardGoesTo && theRewardGoesTo === 'draw'){
        status = "It's a " + theRewardGoesTo;
        <button onClick = {() =>setBoard(Array(9).fill(null))}> New Game</button>
           
    } else {
        status = 'Next player: ' + (movementX ? 'X' : 'O');
    }

    
         const returnBack = () => {
        return (
            <button onClick = {() =>setBoard(Array(9).fill(null))}> New Game</button>
            );
        } 
 
    return (
        <>
        <GameBoard buttons = {board} onClick = {handleClick}/>

       
        <div style = {style}>
    <p>{status}</p>
    <p>{returnBack()}</p>

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
