import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSqure, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSqure(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updateBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });

    onSelectSqure();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSqure(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
