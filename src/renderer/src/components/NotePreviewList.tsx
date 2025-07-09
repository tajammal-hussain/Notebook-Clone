import { notesMock } from "@renderer/store/mocks"
import { ComponentProps } from "react"
import NotePreview from "./NotePreview"

export const NotePreviewList = ({className,...props}: ComponentProps<'ul'>) => {
    if(!notesMock.length) return <div className="text-center text-zinc-400" pt-4>No notes found</div>
    return (
        <ul className={className} {...props}>
            {notesMock.map((note) => (
                <NotePreview key={note.title} {...note} />
            ))}
        </ul>
    )
}