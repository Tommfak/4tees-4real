import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/shop/logo";
import { ThemeToggle } from "@/components/shop/theme-toggle";
import { cn } from "@/lib/utils";

export function ShopNav({ trailing }: { trailing?: ReactNode }) {
  return (
    <header className="shop-nav sticky top-0 z-30 border-b border-border bg-bg">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-5">
        <Link to="/" className="shrink-0">
          <Logo className="text-[16px] font-medium" />
        </Link>
        <div className="ml-auto flex items-center">
          {trailing}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export function NavText({ to, children, subtle }: { to: "/track" | "/admin"; children: ReactNode; subtle?: boolean }) {
  return (
    <Link
      to={to}
      className={cn("grid h-11 place-items-center px-2.5 text-[13px]", subtle ? "text-subtle" : "text-muted")}
    >
      {children}
    </Link>
  );
}
