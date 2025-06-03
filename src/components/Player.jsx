import { useState } from "react";

/* oma kokeilu
const handleClick = () => {
  setIsEditing(true);
};
*/
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  {
  }
  /* className = .player-name */
  let playerName = <span className="player-name"> {name} </span>;
  if (isEditing) {
    playerName = <input type="text" required />;
  }
  return (
    <li>
      {/* className = .player */}
      <span className="player">
        {playerName}
        {/* className = .player-symbol */}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
