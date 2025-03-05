import React, { useState } from "react";

const Battle = ({ player, enemy, onEnd }) => {
  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(50);

  const attack = () => {
    setEnemyHP((hp) => Math.max(hp - 10, 0));
    setPlayerHP((hp) => Math.max(hp - 5, 0));

    if (enemyHP - 10 <= 0) {
      alert("Você venceu!");
      onEnd();
    } else if (playerHP - 5 <= 0) {
      alert("Você perdeu!");
      onEnd();
    }
  };

  return (
    <div className="battle">
      <h2>Batalha!</h2>
      <p>Player HP: {playerHP}</p>
      <p>Enemy HP: {enemyHP}</p>
      <button onClick={attack}>Atacar ⚔️</button>
    </div>
  );
};

export default Battle;