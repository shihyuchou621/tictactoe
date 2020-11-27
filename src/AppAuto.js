import React, { useState } from 'react';
import './App.css';

const gameOverStr = ',036,147,258,012,345,678,048,246,';
const corner = ['0','2','6','8'];

let gameOverO = gameOverStr;
let gameOverX = gameOverStr;

export default function App() {
  const [isO, setIsO] = useState(true);
  const [plate, setPlate] = useState(Array(9).fill(""));
  const [over, setOver] = useState(false);
  const [initiative, setInitiative] = useState(true);

  const handleClick = index => {
    if(plate[index] === "" && !over) {
      if([gameOverX, gameOverO][+isO].includes('4') && index !== 4) {
        const newPlate = [
          ...plate.slice(0, index),
          isO,
          ...plate.slice(index + 1),
        ];
        const newPlate2 = [
          ...newPlate.slice(0, 4),
          !isO,
          ...newPlate.slice(5),
        ];
        setPlate(newPlate2);
      } else {
        for(i = 0; i < 9; i++) {
          if([gameOverX, gameOverO][+isO].includes(`,${i},`) && index !== i) {
            const newPlate = [
              ...plate.slice(0, index),
              isO,
              ...plate.slice(index + 1),
            ];
            const newPlate2 = [
              ...newPlate.slice(0, i),
              !isO,
              ...newPlate.slice(i + 1),
            ];
            setPlate(newPlate2);
            return;
          }
        }

        const newPlate = [
          ...plate.slice(0, index),
          isO,
          ...plate.slice(index + 1),
        ];

        for(i = 0; i < corner.length; i++) {
          if([gameOverX, gameOverO][+isO].includes(i) &&  index !== i) {
            const newPlate = [
              ...plate.slice(0, index),
              isO,
              ...plate.slice(index + 1),
            ];
            const newPlate2 = [
              ...newPlate.slice(0, i),
              !isO,
              ...newPlate.slice(i + 1),
            ];
            setPlate(newPlate2);
            return;
          } else {
            ????
          }
        }

        const newPlate2 = [
          ...newPlate.slice(0, i),
          !isO,
          ...newPlate.slice(i + 1),
        ];
        setPlate(newPlate2);
      }


      if(isO) {
        gameOverO = gameOverO.replace(new RegExp(index, 'g'), '');
      } else {
        gameOverX = gameOverX.replace(new RegExp(index, 'g'), '');
      }

      if([gameOverX, gameOverO][+isO].includes(',,')) {
        setOver(true);
        return;
      }
      // setIsO(!isO);
    }
    console.log(gameOverO, gameOverX);

  };

  const resetGame = () => {
    setOver(false);
    setPlate(Array(9).fill(""));
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
