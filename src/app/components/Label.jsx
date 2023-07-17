import React from 'react'
import 'tailwindcss/tailwind.css';


function Label({ htmlFor, textInfo }) {
  return (
    <label htmlFor={htmlFor} className="w-full text-sm leading-tight tracking-wide text-zinc-100 mb-1">
      {textInfo}
    </label>
  )
}

export default Label
