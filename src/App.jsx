import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "../winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function findActivePlayer(gameTurns)  {

let currentPlayer = "X";

      if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
      }
      return currentPlayer;
    }
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [isWinner, setIsWinner] = useState(false)
 // const [activePlayer, setActivePlayer] = useState("X");

const activePlayer = findActivePlayer(gameTurns);

let gameboard = initialGameBoard; 

for (const turn of gameTurns) {
  const { square, player } = turn;
  const { row, col } = square;

  gameboard[row][col] = player;
  }
let winner = null;

for (const combination of WINNING_COMBINATIONS) {
  const firstSquareSymbol = gameboard[combination[0].row][combination[0].column]
  const secondSquareSymbol = gameboard[combination[0].row][combination[1].column]
  const thirdSquareSymbol = gameboard[combination[0].row][combination[2].column]

  if( firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol )
  winner = firstSquareSymbol;
}


  function handleSelectSquare(rowIndex, colIndex) {
  //   setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer  = findActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {winner && <p>You won, {winner}! </p>}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          turns={gameTurns}
          board={gameboard}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
