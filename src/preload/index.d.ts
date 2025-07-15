import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
      getNotes: () => Promise<NoteInfo[]>
      readNote: (title:string) => Promise<string>
    }
  }
}
