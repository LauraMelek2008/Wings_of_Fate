import React, { useState, useEffect } from "react";
import "./Styles.css"; // Certifique-se de ter os estilos aplicados

const Player = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  // Mapeia as teclas para direções
  const movePlayer = (key) => {
    setPosition((prev) => {
      let newPos = { ...prev };
      if (key === "ArrowUp" || key === "w") newPos.y -= 10;
      if (key === "ArrowDown" || key === "s") newPos.y += 10;
      if (key === "ArrowLeft" || key === "a") newPos.x -= 10;
      if (key === "ArrowRight" || key === "d") newPos.x += 10;
      return newPos;
    });
  };

  // Adiciona e remove event listeners ao montar/desmontar o componente
  useEffect(() => {
    const handleKeyDown = (event) => movePlayer(event.key);
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="player" style={{ left: position.x, top: position.y }} />
  );
};

export default Player;