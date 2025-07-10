import { atom } from "jotai";
import { notesMock } from "./mocks";
import { NoteInfo } from "@shared/models";

export const notesAtom = atom<NoteInfo[]>(notesMock)

export const selectedNoteIndexAtom = atom<number | null>(null)
export const selectedNoteAtom = atom((get) => {
    const selectedNoteIndex = get(selectedNoteIndexAtom)
    if(selectedNoteIndex === null) return null
    const selectedNote = get(notesAtom)[selectedNoteIndex]
    return {
        ...selectedNote,
        content: `Hello from Note ${selectedNoteIndex}`
    }
})

export const createEmptyNoteAtom = atom(null, async (get, set) => {
    const notes = get(notesAtom)
  
    if (!notes) return
  
    const title = `Note ${notes.length + 1}`
  
    const newNote: NoteInfo = {
      title,
      lastEditTime: Date.now()
    }
  
    set(notesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])
  
    set(selectedNoteIndexAtom, 0)
})

export const deleteNoteAtom = atom(null, async (get, set) => {
    const notes = get(notesAtom)
    if (!notes) return
    const selectedNote = get(selectedNoteAtom)
    if (selectedNote === null) return
    set(
        notesAtom,
        notes.filter((note) => note.title !== selectedNote.title)
    )
    // de select any note
    set(selectedNoteIndexAtom, null)
})