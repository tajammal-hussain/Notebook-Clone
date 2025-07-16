import { homedir } from "os"
import { ensureDir, readdir, stat, readFile, writeFile } from 'fs-extra'
import { isEmpty } from "lodash"
import { welcomeNoteFilename, fileEncoding, welcomeNoteContent } from "@shared/constants"
// Root directory for the app
export const getRootDir = (): string => {
    return `${homedir()}/notebook-clone`
}

// Get the All notes from the root directory 
//saved as .md file 
export const getNotes = async (): Promise<Array<{title: string, lastEditTime: Date}>> => {

    const rootDir = getRootDir()

    await ensureDir(rootDir)

    const files = await readdir(rootDir)
    const notes = files.filter((fileName) => fileName.endsWith('.md'))

   if(isEmpty(notes))
    {
        console.info("No notes found, creating a new note")
        const content = welcomeNoteContent
        
        await writeFile(`${rootDir}/${welcomeNoteFilename}`, content, { encoding: fileEncoding })
        notes.push(welcomeNoteFilename)
    }

    return Promise.all(notes.map(getNoteInfoFromFilename))

}

const getNoteInfoFromFilename = async (filename: string): Promise<{title: string, lastEditTime: Date}> => {
    const rootDir = getRootDir()
    const filePath = `${rootDir}/${filename}`
    const file = await stat(filePath)
    return {
        title: filename.replace(/\.md$/, ''),
        lastEditTime: file.mtime
    }
}

// File encoding constant

//Read the note content from the file
export const readNote = async (title: string): Promise<string> => {
    const rootDir = getRootDir()
    return readFile(`${rootDir}/${title}.md`, { encoding: fileEncoding })
}