import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function SideNav() {
  return (
    <Command className="rounded-lg border shadow-md h-full w-96">
      <CommandInput placeholder="Search your trees..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Your Trees">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Sarman's Family Tree</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Famous Familes">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Royal Family (UK)</span>
          </CommandItem>
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>The Kardashians</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
