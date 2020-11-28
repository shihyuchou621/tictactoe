import React, { useState, useEffect } from 'react';
import isWin from "./isWin";
import './App.css';

const corner = ['0','2','6','8'];


/* 這邊不一定要傳 isO 因為圈先是固定的 */
class AI {
  play ( plate, isO ) {
    if(plate[4] === "") {
      const newPlate = [...plate];
      newPlate[4] = isO ? 'X': 'O';
      return newPlate;
    }
    return plate;
    //   for(let i = 0; i < 9; i++) {
    //     if([gameOverX, gameOverO][+isO].includes(`,${i},`)) {
    //       const newPlate = [
    //         ...[gameOverX, gameOverO][+isO].slice(0, i),
    //         !isO,
    //         ...[gameOverX, gameOverO][+isO].slice(i + 1),
    //       ];
    //       return newPlate;
    //     }
    //   }
  }
}

export default function App() {
  const [isO, setIsO] = useState(true);
  const [aiFirst, setAiFirst] = useState(false);
  const [plate, setPlate] = useState(Array(9).fill(""));
  const [over, setOver] = useState(""); // "", "O", "X", "T"
  const [initiative, setInitiative] = useState(true);

  useEffect(() => {
    if(aiFirst || plate.join('') !== "")
    {const ai = new AI();
      const newPlate = ai.play(plate, isO);
      setPlate(newPlate);

      const result = isWin(newPlate);
      if(result) {setOver(result);}}
  }, [plate.join('')]);

  const handleClick = index => {
    const newPlate = [...plate];
    newPlate[index] = isO ? 'O': 'X';
    setPlate(newPlate);

    const result = isWin(newPlate);
    if(result) {setOver(result);}
  };

  // ai.play(plate, isO);

  const resetGame = () => {
    setOver(false);
    setPlate(Array(9).fill(""));
    setIsO(true);
    setInitiative(true);
    gameOverO = gameOverStr;
    gameOverX = gameOverStr;
  };

  const setInit = () => {
    if(plate.join('') === "") {
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
              {unit}
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
