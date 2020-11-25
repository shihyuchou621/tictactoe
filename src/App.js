import React, { useState } from 'react';
import './App.css';

const gameOver = [
  // 直
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // 橫
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // 斜
  [0, 4, 8],
  [2, 4, 6]
]

export default function App() {
  const [player, setPlayer] = useState("O");
  const [plate, setPlate] = useState([...Array(9)].map(unit => ""));
  const [over, setOver] = useState(false);

  
  const handleClick = index => {
    
    setPlate([
      ...plate.slice(0, index),
      player,
      ...plate.slice(index + 1),
    ]);
    setPlayer(player === "O" ? "X" : "O");

    const answerO = [...plate].map((unit, index) => unit === "O" ? index : ""); 
    const answerX = [...plate].map((unit, index) => unit === "X" ? index : "");
    
    for(let i = 0; i++; i < 9) {
      console.log(i);
      if(answerO.includes(gameOver[i][0]) && 
          answerO.includes(gameOver[i][1]) && 
            answerO.includes(gameOver[i][2]) 
      ) {
        setOver(true);
      }
    }
    
    console.log(answerO, answerX);
  }

  const resetGame = () => {
    setOver(false);
    setPlate([...Array(9)].map(unit => ""));
  }

  return (
    <div>
      <div className="plate">
        {
          plate.map((unit, index) =>
            <div className="unit" key={index} onClick={handleClick.bind(this, index)}>
              {`${plate[index]}(${index})`}
            </div>
          )
        }
      </div>
      <div>
        { !!over&&
          <div>
          winner: {player}
          <button onClick={resetGame}>reset</button>
          </div>
        }
      </div>
    </div>
  )
}
