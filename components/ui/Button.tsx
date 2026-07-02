import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={
        variant === "primary"
          ? "btn-primary"
          : "btn-outline"
      }
    >
      {children}
    </Link>
  );
}