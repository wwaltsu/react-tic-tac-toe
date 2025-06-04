import { useState } from "react";

export default function Player({ initialName, symbol }) {
  // huom initial name on propsina
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editng) => !editng);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  {
  }
  /* className = .player-name */
  let editablePlayerName = <span className="player-name"> {playerName} </span>;
 
  if (isEditing) {
    editablePlayerName = 
      // two way binding
      <input type="text" required value={playerName} onChange={handleChange} />
    
  }

  return (
    <li>
      {/* className = .player */}
      <span className="player">
        {editablePlayerName}
        {/* className = .player-symbol */}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
