import React from "react";

const Square = (props) => {
  const handleClick = () => {
    if (!props.gameOver) {  
      if (!props.squareValue) {    
        if (props.view === 'one') {
          console.log('cliccccccked')
          props.squares.splice(props.index, 1, "X");
          props.setSquares(props.squares);
          props.setPlayer(!props.player);
          let available = []
          props.squares.forEach((s, i) => {
            if (s === "") {
              available.push(i)
            }
          })
          const randomIndex = Math.floor(Math.random() * available.length);
          props.squares.splice(available[randomIndex], 1, "O");
          props.setSquares(props.squares);
          props.setPlayer(!props.player);
        } else {
          if (props.player) {
            props.squares.splice(props.index, 1, "X");
            props.setSquares(props.squares);
            props.setPlayer(!props.player);
          } else {
            props.squares.splice(props.index, 1, "O");
            props.setSquares(props.squares);
            props.setPlayer(!props.player);
          }
        }
      }
    }
  };
  return (
    <div className="square" onClick={handleClick}>
      {props.squareValue === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" alt="devmountain-logo"/> : props.squareValue}
    </div>
  );
};

export default Square;