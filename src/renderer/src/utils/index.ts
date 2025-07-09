import clsx, {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

// Utility function to merge class names using clsx and tailwind-merge
// This function allows you to combine multiple class names and resolve conflicts,
// ensuring that the final class name string is optimized for use in React components.
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}
