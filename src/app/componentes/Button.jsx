import React from 'react'

function Button({textInfo, onClick}) {
  return (
    <button onClick={onClick} className="text-sm rounded-sm border border-zinc-50 text-zinc-50 w-[130px] tracking-wider mt-1 p-2 hover:border-amber-700">
      {textInfo}
    </button>
  )
}

export default Button
