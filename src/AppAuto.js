import React, { useState } from 'react';
import './App.css';

const gameOverStr = ',036,147,258,012,345,678,048,246,';
const corner = ['0','2','6','8'];

let gameOverO = gameOverStr;
let gameOverX = gameOverStr;

class AI {
  play ( plate, isO ) {
    if(plate[4] !== "") {
      return [
        ...plate.slice(0, 4),
        !isO,
        ...plate.slice(5),
      ];
    } else {

      for(let i = 0; i < 9; i++) {
        if([gameOverX, gameOverO][+isO].includes(`,${i},`)) {
          const newPlate = [
            ...[gameOverX, gameOverO][+isO].slice(0, i),
            !isO,
            ...[gameOverX, gameOverO][+isO].slice(i + 1),
          ];
          return newPlate;
        }
      }
    }
  }
}

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

      isO ?
        gameOverO = gameOverO.replace(new RegExp(index, 'g'), '') :
        gameOverX = gameOverX.replace(new RegExp(index, 'g'), '');

      if([gameOverX, gameOverO][+isO].includes(',,')) {
        setOver(true);
        return;
      }
      setIsO(!isO);
    }

    const ai = new AI();
    ai.play(plate);

    if(isO) {
      gameOverO = gameOverO.replace(new RegExp(index, 'g'), '');
    } else {
      gameOverX = gameOverX.replace(new RegExp(index, 'g'), '');
    }

    if([gameOverX, gameOverO][+isO].includes(',,')) {
      setOver(true);
      return;
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
