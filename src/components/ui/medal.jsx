import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

export default function Medal({ medal }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            width={75}
            height={75}
            src={medal.url}
            alt={medal.text}  
            className="w-[25px] h-[25px]"
          />
        </TooltipTrigger>
        <TooltipContent className="w-32">
          <p>{medal.text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
