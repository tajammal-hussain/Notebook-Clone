import { contextBridge, ipcRenderer } from 'electron'

// Custom APIs for renderer
if(!process.contextIsolated){
  throw new Error('contextBridge is not isolated, please check your preload script configuration.')
}
try {
  contextBridge.exposeInMainWorld('context', {
    locale:navigator.language,
    getNotes: ()=>ipcRenderer.invoke('getNotes')
  })
}
catch (error) {
  console.error('Failed to expose electronAPI:', error)
}
