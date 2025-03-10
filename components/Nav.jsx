import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar.jsx";
import Link from "next/link";
import Logo from "@/components/logo.jsx";

const Nav = ({ navItems }) => {
  return (
    <nav className="">
      <div className="wrapper">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex gap-6">
            {navItems?.map((navlink, index) => (
              <div key={index}>
                <Link href={navlink?.links}>{navlink?.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
