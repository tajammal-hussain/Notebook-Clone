import { homedir } from "os"
import { ensureDir, readdir, stat, readFile } from 'fs-extra'

// Root directory for the app
export const getRootDir = ()=>{
    return `${homedir()}/notebook-clone`
}

// Get the All notes from the root directory 
//saved as .md file 
export const getNotes = async ()=>{
    const rootDir = getRootDir()
    await ensureDir(rootDir)
    const files = await readdir(rootDir)
    const notes = await Promise.all(files.map(getNoteInfoFromFilename))
    return notes
}

const getNoteInfoFromFilename = async (filename:string)=>{
    const rootDir = getRootDir()
    const filePath = `${rootDir}/${filename}`
    const file = await stat(filePath)
    return {
        title: filename.replace('/\.md$/', ''),
        lastEditTime: file.mtime
    }
}


//Read the note content from the file
export const readNote = async (title:string)=>{
    const rootDir = getRootDir()
    const filePath = `${rootDir}/${title}`
    return readFile(filePath, { encoding: 'utf8' })
}