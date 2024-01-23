import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "./icons";
import { HTMLAttributes } from "react";

type HelpTooltipProps = HTMLAttributes<HTMLOrSVGElement>;

export function HelpTooltip({ children, ...props }: HelpTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button>
            <Icons.question {...props} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{children}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
