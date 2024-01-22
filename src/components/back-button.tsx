import { HTMLAttributes } from "react";
import { Icons } from "./icons";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export function BackButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className="button-background shadow-custom flex h-9 w-max items-center  gap-3 rounded-full border-opacity-50 px-5 text-sm"
      {...props}
    >
      <Icons.back className="shrink-0" />
      Back
    </button>
  );
}
