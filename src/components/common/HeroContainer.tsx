import { ReactNode } from "react";

export default function HeroContainer({ children }: { children: ReactNode }) {
  return <div className="bg-hero-cg-gradient">{children}</div>;
}
