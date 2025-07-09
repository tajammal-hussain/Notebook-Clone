import { ComponentProps } from "react"
import NotePreview from "./NotePreview"
import { useNotesList } from "@renderer/hooks/useNotesList"

export const NotePreviewList = ({className,...props}: ComponentProps<'ul'>) => {
    const { notes, selectedNoteIndex, handleSelectNote} = useNotesList({})
    if(!notes.length) return <div className="text-center text-zinc-400" pt-4>No notes found</div>
    return (
        <ul className={className} {...props}>
            {notes.map((note, index) => (
                <NotePreview key={note.title} {...note} isActive={selectedNoteIndex === index} onClick={handleSelectNote(index)} />
            ))}
        </ul>
    )
}