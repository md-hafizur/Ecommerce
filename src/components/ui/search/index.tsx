import { Search } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";

export default function SearchInput({
  className,
  inputClassName,
  placeholder = "Search...",
}: {
  className?: string;
  inputClassName?: string;
  placeholder?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <Input className={`${inputClassName}`} placeholder={placeholder} />
      <Button
        variant="secondary"
        size="icon"
        className="size-8 absolute right-1 top-1/2 transform -translate-y-1/2 bg-transparent shadow-none"
      >
        <Search />
      </Button>
    </div>
  );
}
