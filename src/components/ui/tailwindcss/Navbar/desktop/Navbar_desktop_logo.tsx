import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarTabletImgProps {
  src?: string; // Optional prop for the image source
  alt?: string; // Optional prop for the image alt text
  href?: string; // Link href for the logo
}
const Navbar_desktop_logo = ({ src, alt, href }: NavbarTabletImgProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Link className="Header__logo" href={href ? href : "/"}>
        <Image
          src={src ? src : "https://i.ibb.co/kv9nMCL/FRNZ-logo-online.png"}
          alt={alt ? alt : "Logo"}
          width={150}
          height={150}
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default Navbar_desktop_logo;
