import React from 'react'
const whoIsWinner = (buttons) =>{
    const correctAnswers = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < correctAnswers.length; i++) {
      const [a, b, c] = correctAnswers[i];
      // sırayla dizi elemanlarını kontrol ediyor birbirlerine eşit mi diye
      if(buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
        return buttons[a];
    }
    else if(!buttons.includes(null)){
        return 'draw';
    }
    }
    return null;
  }
  export default whoIsWinner;