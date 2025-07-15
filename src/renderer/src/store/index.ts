import { atom, useAtom } from "jotai";
import { notesMock } from "./mocks";
import { NoteInfo } from "@shared/models";
import { unwrap } from "jotai/utils";

const loadNotes = async () => {
    const notes = await window.context.getNotes()
    // sort them by most recently edited
    return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}


const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())
export const notesAtom = unwrap(notesAtomAsync, (prev) => prev)
export const selectedNoteIndexAtom = atom<number | null>(null)


export const selectedNoteAtomAsync = atom(async (get) => {
    const selectedNoteIndex = get(selectedNoteIndexAtom)
    const notes = get(notesAtom)
    if(selectedNoteIndex === null || !notes) return null
    const selectedNote = notes[selectedNoteIndex]
    const noteContent = await window.context.readNote(selectedNote.title)
    return {
        ...selectedNote,
        content: noteContent
    }
})

export const selectedNoteAtom = unwrap(
    selectedNoteAtomAsync,
    (prev) =>
      prev ?? {
        title: '',
        content: '',
        lastEditTime: Date.now()
      }
  )
  


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

    if (!selectedNote || !notes) return
    
    set(
        notesAtom,
        notes.filter((note) => note.title !== selectedNote.title)
    )
    // de select any note
    set(selectedNoteIndexAtom, null)
})