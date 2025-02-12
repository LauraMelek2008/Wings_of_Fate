import React, { useState } from 'react'

function JogoDeDados() {
    const icone = ['🐉', '😒', '❤️', '🤮', '🔮', '⛪', '👻', '😈👹', '🐯', '📸', '✈️', '⛈️', '🛣️', '✝️', '💥', '⚠️'];

    //estado para armazenA
    // const [icon, setIcon] = useState('')
    const [icon, setIcon] = useState('')

    //funcao para sorte icon
    const sorteaEmoji = () => {
    const indice = Math.floor(Math.random() * icone.length);
    const emojsorteado = icone[indice];
    setIcon(emojsorteado)

    }
    return (
    <div className='conteine-principal'>

   <h1>Story Cubes</h1>
   <P>Clique para vc criar a sua história </P>

    <div style={{fontSize: '70px', marginTop: '30px'}}> {icon ? icon : 'Sorteie seu emoji!'}</div>

    <button onClick={sorteaEmoji}>Não clique</button> </div>
  )
}

export default JogoDeDados