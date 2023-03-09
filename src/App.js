import './App.css';
import Header from "./components/Header";
import {useState} from "react";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const siteName = "Tic Tac Toe Game"

    console.log(board)

    return (
        <div className="App">
            <Header siteName={siteName}/>

            <div className='grid-container'>
                {board.map(el =>
                    <div key={el} className='grid-item'>
                        {el}
                    </div>)}
            </div>

        </div>
    );
}

export default App;
