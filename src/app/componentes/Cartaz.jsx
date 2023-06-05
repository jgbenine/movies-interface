import React from 'react'

function Cartaz({backgroundImage, children, titleMovie, sinceFilme, director}) {

  const styles ={
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <div className="cartaz" style={styles}>
      <div className="cartaz-description">
        <p>{titleMovie}</p>
        <p>{sinceFilme}</p>
        <p>{director}</p>
      </div>
      {children}
    </div>
  )
}

export default Cartaz
