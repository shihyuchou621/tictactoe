import React, { useState, useEffect } from 'react';
import isWin from "./isWin";
// import cx from 'classnames';
import './App.css';

const gameOverStr = ',036,147,258,012,345,678,048,246,';

const produceNewStr = (plate, isO) => {
  let newStr = gameOverStr;
  for(let i = 0; i < 9; i++) {
    const player = isO ? 'O': 'X';
    if(plate[i] === player) {
      newStr = newStr.replace(new RegExp(i, 'g'), '');
    }
  }
  return newStr;
};

const setCorner = (plate, isO, a, b) => {
  const newPlate = [...plate];
  if(plate[a] === "" && plate[b] === "") {
    const i = Math.random() < 0.5 ? a : b;
    newPlate[i] = isO ? 'X': 'O';
    return newPlate;
  }
  return newPlate;
};

/* 這邊不一定要傳 isO 因為圈先是固定的 */
class AI {
  play ( plate, isO ) {

    let newPlate = [...plate];

    if(plate[4] === "") {
      newPlate[4] = isO ? 'X': 'O';
      return newPlate;
    }

    for(let i = 0; i < 9; i++) {
      if(produceNewStr(plate, !isO).includes(`,${i},`) && plate[i] === "") {
        newPlate[i] = isO ? 'X': 'O';
        return newPlate;
      }
    }

    for(let i = 0; i < 9; i++) {
      if(produceNewStr(plate, isO).includes(`,${i},`) && plate[i] === "") {
        newPlate[i] = isO ? 'X': 'O';
        return newPlate;
      }
    }

    newPlate = setCorner(plate, isO, 0, 8);
    if(newPlate.join('') !== plate.join('')) return newPlate;

    newPlate = setCorner(plate, isO, 2, 6);
    if(newPlate.join('') !== plate.join('')) return newPlate;

    newPlate = setCorner(plate, isO, 1, 7);
    if(newPlate.join('') !== plate.join('')) return newPlate;

    newPlate = setCorner(plate, isO, 3, 5);
    if(newPlate.join('') !== plate.join('')) return newPlate;

    newPlate[plate.findIndex(v => v === "")] = isO ? 'X': 'O';
    return newPlate;
  }
}

export default function App() {
  const [isO, setIsO] = useState(true);
  const [aiFirst, setAiFirst] = useState(false);
  const [initiative, setInitiative] = useState(true);
  const [plate, setPlate] = useState(Array(9).fill(""));
  const [over, setOver] = useState(""); // "", "O", "X", "T"
  const [start, setStart] = useState(false);

  useEffect(() => {
    if(over) return;
    if(!(aiFirst || plate.join('') !== "")) return;
    const ai = new AI();
    const newPlate = ai.play(plate, isO);
    setPlate(newPlate);
    const result = isWin(newPlate);
    if(result) {setOver(result);}
  }, [plate.filter(ox => ox === (isO ? "O" : "X")).length, start]);

  const handleClick = index => {
    if(!start) return;
    if(plate[index] !== "") return;
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
    setStart(false);
    setAiFirst(false);
  };

  const setInit = () => {
    setIsO(!isO);
    setInitiative(!initiative);
  };

  const setFirstHand = () => {
    setAiFirst(!aiFirst);
  };

  const startGame = () => {
    setStart(!start);
  };

  return (
    <div>
      <button
        className={`choiceBtn `}
        disabled={start}
        onClick={setInit}
      >You: {initiative ? "O" : "X"}</button>

      <button
        className={`choiceBtn`}
        disabled={start}
        onClick={setFirstHand}
      >first hand: {aiFirst ? "AI" : "You"}
      </button>

      <div className="plate">
        {plate.map((unit, index) =>
          <div
            key={index}
            className={`unit ${(start && !over) ? "" : "disabled"}`}
            onClick={handleClick.bind(this, index)}
          >
            {unit}
          </div>
        )}
        {!start &&
        <button
          className="startBtn overPlate"
          onClick={startGame}
        >
        START
        </button>}
      </div>
      <div className={over ? "cloth" : ""} />
      { (over === "O" || over === "X") &&
        <div className="overPlate">
          <div className="resultText">winner: {over}</div>
          <button className="startBtn" onClick={resetGame}>reset</button>
        </div>
      }
      { over === "T" &&
        <div className="overPlate">
          <div className="resultText">break even</div>
          <button className="startBtn" onClick={resetGame}>reset</button>
        </div>
      }
    </div>
  );
}
