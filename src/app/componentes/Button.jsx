import React from 'react'

function Button({textInfo}) {
  return (
    <button className="text-sm rounded-sm bg-cyan-600 text-zinc-50 w-[120px] tracking-wider mt-4 p-2 hover:bg-cyan-700">
      {textInfo}
    </button>
  )
}

export default Button
