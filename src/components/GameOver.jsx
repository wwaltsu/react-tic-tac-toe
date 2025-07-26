export default function Gameover({winner, onRestart}) {
  return (
    <div id="game-over">
    {winner && <p>{winner} won!</p>}
    {!winner && <p>It's a draw!</p>}
    <button onClick={onRestart}>Rematch?</button>
    </div>
  )
}
