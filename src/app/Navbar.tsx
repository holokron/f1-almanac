import Link from "next/link";
import MobileNav from "~/components/MobileNav";

export default function Navbar(): JSX.Element {
  return (
    <div className="navbar bg-base-100">
      <MobileNav />

      <Link href="/" className="btn-ghost btn text-xl normal-case">
        F1 Almanac
      </Link>

      <DesktopMenu />
    </div>
  );
}

function DesktopMenu(): JSX.Element {
  return (
    <ul className="menu menu-horizontal hidden px-1 gap-2 lg:flex">
      <li>
        <Link href="/standings">Standings</Link>
      </li>
      <li>
        <Link href="/drivers">Drivers</Link>
      </li>
      <li>
        <Link href="/constructors">Constructors</Link>
      </li>
      <li>
        <Link href="/seasons">Seasons</Link>
      </li>
    </ul>
  );
}
