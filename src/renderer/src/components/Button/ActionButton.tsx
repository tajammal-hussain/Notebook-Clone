import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ComponentProps } from 'react'

export type ActionButtonProps = ComponentProps<'button'>
export const ActionButton = ({children, className, ...props}: ActionButtonProps) => {
  return (
    <button className={(twMerge('px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100', className))} {...props}>
      {children}
    </button>
  )
}