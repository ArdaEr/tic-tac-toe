import React, {useContext} from 'react'
import  Button  from '../components/Button';
import SessionContext from '../contexts/SessionContext';


const Home=() => {
    const { setAuthenticated } = useContext(SessionContext);
    const handClick = (event) => {
        event.preventDefault();
        setAuthenticated(true);
    }
    return (
    <div>
    <h2>Tic Tac Toe</h2>
    <Button type="ticTactoe" text = "New Game" onClick = {handClick} />
    
    </div>
    )
}


export default Home;
