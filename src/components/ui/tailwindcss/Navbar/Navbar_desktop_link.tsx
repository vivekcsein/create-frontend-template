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
    <Link
      href={href}
      className={` transition-colors cursor-pointer relative group text-background ${className}`}
    >
      {children}
    </Link>
  );
};

export default Navbar_desktop_link;
