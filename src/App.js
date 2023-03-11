import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import Square from "./components/Square";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState('')
    // const [count, setCount] = useState(1);
    const [gamerX, setGamerX] = useState(true);
    const siteName = "Tic Tac Toe Game";

    useEffect(() => {
        setWinner(calculateWinner())
    }, [board])

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

    const onMoveHandle = (ind, el) => {
        const gamer = gamerX ? 'X' : '0';
        if (el === null) {
            setBoard(board.map((el, index) => ind === index ? gamer : el))
            setGamerX(!gamerX)
        }
    };

    const calculateWinner = () => {
        const winningCombination = [
            [0, 4, 8],
            [2, 4, 6],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];

        // for (let i = 0; i < winningCombination.length; i++) {
        //     const [a, b, c] = winningCombination[i];
        //     console.log(board[a],board[b], board[c],  'abc')
        //
        //     if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        //         return `${board[a]} won!`
        //     }
        // }
        for (let i of winningCombination) {
            const [a, b, c] = i
                if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                    return `${board[a]} won!`
                }
        }
    };

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

            <h2>{winner}</h2>

        </div>
    );
}

export default App;
