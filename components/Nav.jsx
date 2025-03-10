// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import Link from "next/link";
import Logo from "@/components/logo.jsx";

const Nav = ({ navItems }) => {
  return (
    <div className="flex gap-6 items-center">
      <div className="wrapper">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex gap-6">
        {navItems?.map((navlink, index) => (
          <div key={index}>
            <Link href={navlink?.links}>{navlink?.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
