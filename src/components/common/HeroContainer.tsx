import { ReactNode } from "react";
import { useTheme } from "next-themes";

export default function HeroContainer({ children }: { children: ReactNode }) {
  // return <div className={theme === 'light' ? 'bg-hero-cg-gradient' : 'bg-black'}>{children}</div>;
  return (
    // <div className="from-gradient-start to-gradient-end bg-gradient-to-br">
    <div className="dark:bg-hero-cg-gradient-dark bg-hero-cg-gradient">
      {children}
    </div>
  );
  // return <div className="bg-hero-cg-gradient dark:bg-black">{children}</div>;
}
