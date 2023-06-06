import React from 'react'
import 'tailwindcss/tailwind.css';


function Input({type, idInput, placeholder, disabled, ref}) {
  return (
    <input type={type} ref={ref} id={idInput} placeholder={placeholder} disabled={disabled} className="w-full py-2 px-2 rounded-sm bg-transparent border leading-tight border-zinc-500 text-zinc-50"/>
  )
}

export default Input
