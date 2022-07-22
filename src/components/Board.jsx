import { useState, useEffect } from "react";
import Square from "./Square";

const OnePlayer = ({setView, view}) => {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [topText, setTopText] = useState('Who will win?')

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
    setGameOver(false)
    setTopText('Who will win?')
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setGameOver(true)
        setTopText(`O won!`)
      } else if (!squares.includes("")) {
        setTopText(`It's a tie!`)
      }
    }
  }

  useEffect(() => {
    calculateWinner(squares)
  })

  return (
    <div className="App">
      <p>{topText}</p>
      <button onClick={handleClick}>Reset</button>
      <button>Back to Home</button>


      <div className="container">
        {squares.map((val, index) => {
          return (
            <Square
              key={index}
              setSquares={setSquares}
              index={index}
              squareValue={val}
              squares={squares}
              player={player}
              setPlayer={setPlayer}
              gameOver={gameOver}
              view={view}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OnePlayer;