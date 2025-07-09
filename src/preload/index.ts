import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
if(!process.contextIsolated){
  throw new Error('contextBridge is not isolated, please check your preload script configuration.')
}
try {
  contextBridge.exposeInMainWorld('electron', electronAPI)
}
catch (error) {
  console.error('Failed to expose electronAPI:', error)
}
