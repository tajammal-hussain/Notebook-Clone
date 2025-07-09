import { ActionButton, ActionButtonProps } from "./ActionButton"
import { RiFileEditLine } from "react-icons/ri";
import { ComponentProps } from "react"

export const NewNoteButton = ({...props}: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <RiFileEditLine className='w-4 h-4 text-zinc-300' />
    </ActionButton>
  )
}