import { RootLayout, Sidebar, Content, DraggableTopBar, ActionButtonsRow } from './components'

const  App =  () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className='p-2'>
          <ActionButtonsRow className='flex justify-between m-1' />
        </Sidebar>
        <Content className='border-l bg-zinc-900/500 border-l-white/20'>
          <div>Content</div>
        </Content>
      </RootLayout>
    </>
  )
}

export default App
