import React from 'react'
import 'tailwindcss/tailwind.css';

export function Input({ type, idInput, placeholder, disabled, ref, onChange }) {
  return (
    <input
      className="w-full py-2 px-2 rounded-sm bg-transparent border leading-tight border-zinc-500 text-zinc-50"
      type={type}
      ref={ref}
      id={idInput}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  )
}
