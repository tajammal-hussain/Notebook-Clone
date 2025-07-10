import { useAtomValue } from "jotai";
import { selectedNoteAtom } from "../store";
import { MarkDownEditor } from "@renderer/components/MarkDownEditor";

export const useMarkdownEditor = () => {
    const selectedNote = useAtomValue(selectedNoteAtom);
    return {
        selectedNote
    }
}
