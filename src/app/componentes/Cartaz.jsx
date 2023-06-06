import React from 'react'
function Cartaz({backgroundImage, children, titleMovie, sinceFilme, director}) {
  const styles ={
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <div className="group cartaz" style={styles}>
      <div className="cartaz-filter group-hover:block"></div>
      <div className="cartaz-description group-hover:block">
        <p>Título: {titleMovie}</p>
        <p>Ano: {sinceFilme}</p>
        <p>Diretor: {director}</p>
      </div>
      {children}
    </div>
  )
}

export default Cartaz
