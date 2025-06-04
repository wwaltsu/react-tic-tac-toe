import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    // TIC TAC pelipöytä
    <main>
      {/* id = #game-container index.css luokassa */}
      <div id="game-container">
        {/* id = #players */}
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard /> 
      </div>
    </main>
  );
}

export default App;
