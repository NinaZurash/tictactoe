import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChangeEvent } from "react";

type Props = {
  boardDimensions: number;
  handleDimensions: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function DimensionPickerPopOver({
  boardDimensions,
  handleDimensions,
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Board Dimensions</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Set the dimensions (max: 20)
            </p>
          </div>

          <Input
            id="dimensions"
            value={boardDimensions}
            defaultValue="3"
            className="col-span-2 h-8"
            onChange={handleDimensions}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
