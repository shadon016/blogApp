import Link from "next/link";

const SideNav = () => {
  return (
    <div className="flex flex-col gap-4 wrapper capitalize w-fit">
      <Link href="" className="bg-slate-200 px-4 py-2">
        add post
      </Link>
      <Link href="" className="bg-slate-200 px-4 w-full">
        all blog
      </Link>
      <Link href="" className="bg-slate-200 px-4 w-full">
        settings
      </Link>
    </div>
  );
};

export default SideNav;
