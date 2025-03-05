import React, { useState } from "react";
import Player from "./components/Player";
import Enemy from "./components/Enemy";
import Map from "./components/Map";
import Battle from "./components/Battle";

const Game = () => {
  const [inBattle, setInBattle] = useState(false);

  return (
    <div>
      {inBattle ? (
        <Battle onEnd={() => setInBattle(false)} />
      ) : (
        <Map>
          <Player />
          <Enemy x={200} y={300} />
        </Map>
      )}
    </div>
  );
};

export default Game;