import type { ReactNode } from "react";

interface SiteLayoutProps {
  children: ReactNode;
  transparentTop?: boolean;
}

export function SiteLayout({ children, transparentTop = false }: SiteLayoutProps) {
  return <div className={transparentTop ? "" : "pt-20"}>{children}</div>;
}
