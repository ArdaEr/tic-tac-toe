import React from 'react';


const GameButton = ({ value, onClick }) => (
    
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

const style = {
    background: 'white',
    border: '3px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

export default GameButton;