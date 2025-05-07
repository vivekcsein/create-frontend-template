import Link from "next/link";

const Navbar_desktop_link = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className={` transition-colors relative group`}>
      {children}
      <span
        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-background  transition-all group-hover:w-full ${className ? className : ""} `}
      />
    </Link>
  );
};

export default Navbar_desktop_link;
