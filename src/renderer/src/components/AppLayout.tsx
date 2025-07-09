import { twMerge } from "tailwind-merge"
import { ComponentProps, forwardRef } from "react"


export const RootLayout = ({children, className, ...props}: ComponentProps<'main'>) => {
  return (
    <main className={(twMerge('flex flex-row h-screen', className))} {...props}>{children}</main>
  )
}

export const Sidebar = ({children, className, ...props} : ComponentProps<'aside'>) => {
  return (
    <aside className={(twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', className))}
      {...props}
    >
      <main className="flex-1">{children}</main>
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({children, className, ...props}, ref) => {
    return (
      <div ref={ref} className={(twMerge('flex-1 overflow-auto', className))} {...props}>{children}</div>
    )
  }
)

Content.displayName = 'Content'