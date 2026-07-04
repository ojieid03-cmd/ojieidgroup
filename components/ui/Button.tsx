import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${
        variant === "primary"
          ? "btn-primary"
          : "btn-outline"
      } ${className}`}
    >
      {children}
    </Link>
  );
}