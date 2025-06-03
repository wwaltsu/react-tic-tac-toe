import Player from "./components/Player";

function App() {
  return (
    // TIC TAC pelipöytä
    <main>
      {/* id = #game-container index.css luokassa */}
      <div id="game-container">
        {/* id = #players */}
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
