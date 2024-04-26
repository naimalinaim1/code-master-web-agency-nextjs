"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${pathname === href ? "text-orange-500" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
