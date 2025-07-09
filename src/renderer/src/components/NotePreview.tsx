import { twMerge } from "tailwind-merge"
import { NoteInfo } from "@shared/models"
import { ComponentProps } from "react"
import { cn,formatDate } from "@renderer/utils";

export type NotePreviewProps = NoteInfo & {
    isActive?: boolean    
} & ComponentProps<'div'>;


export default function NotePreview({title, lastEditTime, isActive, className, ...props}: NotePreviewProps) {
    const formattedDate = formatDate(lastEditTime)
    return (
        <div className={cn('cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-100',
            {
                'bg-zinc-400/75': isActive,
                'hover:bg-zinc-500/75': !isActive,
            },
            className
        )}
        {...props}
        >
            <h3 className="mb-1 font-bold truncate">{title}</h3>
            <p className="inline-block w-full mb-2 text-xs font-light text-left">{formattedDate}</p>
        </div>
    )
}