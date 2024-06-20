import { ReactNode } from "react";
import { useTheme } from "next-themes";

export default function HeroContainer({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return <div className={theme === 'light' ? 'bg-hero-cg-gradient' : 'bg-black'}>{children}</div>;
  // return <div className="bg-bg/20 text-text">{children}</div>;
}
