import React from 'react'

function Label({ htmlFor, textInfo }) {
  return (
    <label htmlFor={htmlFor} className="text-sm leading-tight tracking-wide text-zinc-300">{textInfo}</label>
  )
}

export default Label
