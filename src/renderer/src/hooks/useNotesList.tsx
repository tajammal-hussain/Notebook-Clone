import { useAtomValue , useAtom} from "jotai"
import { notesAtom, selectedNoteIndexAtom } from "../store"

export const useNotesList = ({ onSelect }: { onSelect?: () => void }) => {
    const notes = useAtomValue(notesAtom)
    const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

    const handleSelectNote = ( index: number ) => async () =>{
        setSelectedNoteIndex(index)
        if (onSelect) {
            onSelect()
        }
    }
    
    return {
        notes,
        selectedNoteIndex,
        handleSelectNote
    }
}