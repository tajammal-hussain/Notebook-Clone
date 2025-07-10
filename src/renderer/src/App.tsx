import { RootLayout, Sidebar, Content, DraggableTopBar, ActionButtonsRow, NotePreviewList, FloatingNoteTitle, MarkDownEditor } from './components'
import { useRef } from 'react';
const  App =  () => {
  const contentContainerRef = useRef<HTMLDivElement>(null);
  
  const resetScroll = () =>{
    if(contentContainerRef.current){
      contentContainerRef.current.scrollTop = 0;
    }
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className='p-2'>
          <ActionButtonsRow className='flex justify-between m-1' />
          <NotePreviewList className ="mt-3 space-y-1" onSelect={resetScroll}/>
        </Sidebar>
        <Content ref={contentContainerRef} className='border-l bg-zinc-900/500 border-l-white/20'>
          <FloatingNoteTitle />
          <MarkDownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
