import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Items = [
  ["/standings", "Standings"],
  ["/drivers", "Drivers"],
  ["/constructors", "Constructors"],
  ["/seasons", "Seasons"],
] as const;

export default function MobileNav(): JSX.Element {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex-none lg:hidden">
        <label className="btn-ghost btn-square btn">
          <Menu />
        </label>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle>
          <Link className="btn-ghost btn" href="/">
            F1 Almanac
          </Link>
        </SheetTitle>
        <ul className="menu p-2">
          {Items.map(([path, name]) => (
            <li key={path}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
