import React from 'react'

function Input({type, idInput }) {
  return (
    <input type={type} id={idInput} className="py-2 px-2 rounded-sm bg-transparent border leading-tight border-zinc-500 text-zinc-50"/>
  )
}

export default Input
