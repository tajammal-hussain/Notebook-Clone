import { ActionButton, ActionButtonProps } from "./ActionButton"
import { RiFileEditLine } from "react-icons/ri";
import { ComponentProps } from "react"
import { useSetAtom } from "jotai"
import { createEmptyNoteAtom } from "@renderer/store"

export const NewNoteButton = ({...props}: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)
  const handleClick = () => {
    createEmptyNote()
  }
  return (
    <ActionButton {...props} onClick={handleClick}>
      <RiFileEditLine className='w-4 h-4 text-zinc-300' />
    </ActionButton>
  )
}