import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type SeparatorProps = HTMLAttributes<HTMLDivElement>;

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      className={cn("separator my-2 h-[1px] w-full bg-opacity-70", className)}
      {...props}
    ></div>
  );
}
