import type { MouseEvent } from 'react'
import type { Color } from '@prisma/client'
import { twMerge } from 'tailwind-merge'

interface ColorSelectorProps {
  color: Color
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  isActive?: boolean
}

export const ColorSelector = ({ color, onClick, isActive }: ColorSelectorProps) => {
  return (
    <button
      id={color.id}
      type="button"
      value={color.id}
      onClick={onClick}
      className={twMerge(
        'mx-1 flex h-6 w-6 cursor-pointer items-center justify-center border border-slate-500',
        isActive && 'border-2 border-white'
      )}
      style={{ backgroundColor: color.hex }}
    >
      <span className="sr-only">{color.name}</span>
    </button>
  )
}
