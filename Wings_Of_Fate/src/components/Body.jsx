import React from 'react'
import './Body.css'
import { Link } from 'react-router-dom'
function Body() {
  return (
    <div className='container-body'>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
</style>
    <div className='buttons-container'>
    <h1  className='titulo-fate'>Wings of Fate</h1>
   

   
      <button className='butao-start'>START</button>
      <Link  to={"/dados"}><button className='butao-dados'>DICE</button></Link>
    </div>
  </div>
  )
}

export default Body