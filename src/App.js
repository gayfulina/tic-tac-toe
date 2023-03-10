import './App.css';
import Header from "./components/Header";
import {useState} from "react";
import Square from "./components/Square";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    // const [count, setCount] = useState(1)
    const [gamerX, setGamerX] = useState(true)
    const siteName = "Tic Tac Toe Game"



    // const onMoveHandle = (ind) => {
    //     setCount(count + 1)
    //     setBoard(board.map((el, index) => {
    //         if (ind === index) {
    //             return count % 2 === 0 ? 'X' : '0'
    //         } else {
    //             return el
    //         }
    //     }))
    // }

    const onMoveHandle = (ind) => {
        const gamer = gamerX? 'X' : '0';
        setBoard(board.map((el, index) => ind === index ? gamer : el))
        setGamerX(!gamerX)
    }

    return (
        <div className="App">
            <Header siteName={siteName}/>

            <div className='grid-container'>
                {board.map((el, index) => (
                    <Square
                        key={index}
                        square={el}
                        index={index}
                        onMoveHandle={onMoveHandle}
                    />
                ))}
            </div>

        </div>
    );
}

export default App;
