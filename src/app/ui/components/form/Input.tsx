import React from "react";
import "tailwindcss/tailwind.css";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      className="w-full py-2 px-2 rounded-sm bg-transparent border leading-tight border-zinc-500 text-zinc-50"
      type="text"
      placeholder="Pesquisar"
      {...props}
    />
  );
}