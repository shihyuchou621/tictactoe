import React, { useState } from 'react';
import './App.css';

const gameOverStr = ',036,147,258,012,345,678,048,246,';

let gameOverO = gameOverStr;
let gameOverX = gameOverStr;

// const gameOver = [
//   // 直
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   // 橫
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   // 斜
//   [0, 4, 8],
//   [2, 4, 6]
// ];

export default function App() {
  const [isO, setIsO] = useState(true);
  const [plate, setPlate] = useState(Array(9).fill(""));
  const [over, setOver] = useState(false);
  const [initiative, setInitiative] = useState(true);

  const handleClick = index => {

    if(plate[index] === "" && !over) {
      const newPlate = [
        ...plate.slice(0, index),
        isO,
        ...plate.slice(index + 1),
      ];

      setPlate(newPlate);

      if(isO) {
        gameOverO = gameOverO.replace(new RegExp(index, 'g'), '');
      } else {
        gameOverX = gameOverX.replace(new RegExp(index, 'g'), '');
      }

      if([gameOverX, gameOverO][+isO].includes(',,')) {
        setOver(true);
        return;
      }

      setIsO(!isO);

      // for(let i = 0; i < gameOver.length; i++) {
      //   if(newPlate[gameOver[i][0]] &&
      //       newPlate[gameOver[i][1]] &&
      //         newPlate[gameOver[i][2]]
      //   ) {
      //     setOver(true);
      //     setIsO(true);
      //   }
      // }
    }

  };

  const resetGame = () => {
    setOver(false);
    setPlate(Array(9).fill(""));
    setIsO(true);
    setInitiative(true);
    gameOverO = gameOverStr;
    gameOverX = gameOverStr;
  };

  const setInit = () => {
    if(!plate.includes(true) && !plate.includes(false)) {
      setIsO(!isO);
      setInitiative(!initiative);
    }
  };

  return (
    <div>
      <button
        className="initiative"
        onClick={setInit}
      >initiative: {initiative ? "O" : "X"}</button>
      <div className="plate">
        {
          plate.map((unit, index) =>
            <div className="unit" key={index} onClick={handleClick.bind(this, index)}>
              {plate[index] === false ? "X" :
                plate[index] === true ? "O" : ""}
            </div>
          )
        }
      </div>
      { !!over&&
        <div className="tttAnswer">
        winner: {isO ? "O" : "X"}
          <button onClick={resetGame}>reset</button>
        </div>
      }
      { !plate.includes("") &&
        <div className="tttAnswer">
        break even
          <button onClick={resetGame}>reset</button>
        </div>
      }
    </div>
  );
}
