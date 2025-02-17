import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Dado.css'
function Dado() {
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
    <div className='conteiner-dado'>
<Link to={"/"}><button className='voltar'>↩️</button></Link>
  <h1 className='titulo-dado'>Story Cubes</h1>
  <p className='titulo-historia'>Clique para vc criar a sua história </p>
  <div className='conteiner-emoji' style={{fontSize: '60px', marginTop: '30px'}}> {icon ? icon : 'EMOJI!'}</div>
  <button onClick={sorteaEmoji} className='emoji-emoji'>Não clique</button> 
    
    </div>
  )
}

export default Dado