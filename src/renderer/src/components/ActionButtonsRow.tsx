import { NewNoteButton, DeleteNoteButton } from './Button'
import { ComponentProps } from 'react'

export const ActionButtonsRow = ({...props}: ComponentProps<'div'>) => {
  return (
    <div {...props}>
        <NewNoteButton />
        <DeleteNoteButton />
    </div>
  )
}