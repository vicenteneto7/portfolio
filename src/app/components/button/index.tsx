import { cn } from "@/lib/utis";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn("rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-all disabled:opacity-50", className)} {...props}>
      {children}
    </button>
  );
};
