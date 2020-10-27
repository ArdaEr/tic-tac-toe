import React from 'react';


const Button = ({color, text, type, onClick}) => {
      return (
         
          <button type={type} onClick ={onClick} style={{ color: color}}>{text}</button>
      )
      
};

export default Button;

