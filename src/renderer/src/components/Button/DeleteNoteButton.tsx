import { ActionButton, ActionButtonProps } from "./ActionButton"
import { LuTrash2 } from "react-icons/lu"
import { useSetAtom } from "jotai"
import { deleteNoteAtom } from "@renderer/store"

export const DeleteNoteButton = ({...props}: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)
  const handleClick = () => {
    deleteNote()
  }

  return (
    <ActionButton {...props} onClick={handleClick}>
      <LuTrash2 className='w-4 h-4 text-zinc-300' />
    </ActionButton>
  )
  
}