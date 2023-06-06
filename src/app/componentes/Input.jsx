import React from 'react'
import 'tailwindcss/tailwind.css';


function Input({type, idInput, placeholder }) {
  return (
    <input type={type} id={idInput} placeholder={placeholder} className="w-full py-2 px-2 rounded-sm bg-transparent border leading-tight border-zinc-500 text-zinc-50"/>
  )
}

export default Input
