import { homedir } from "os"
import { ensureDir, readdir,  stat,  } from 'fs-extra'

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
        lastModified: file.mtime
    }
}