import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import { ReactNode } from "react";
import ThemeSwitch from "@/components/ui/theme/ThemeSwitch";
import { NavBarFragment } from "@/lib/__generated/sdk";

export default function Layout({
  children,
  className,
  navBar,
}: {
  children?: ReactNode;
  className: string;
  navBar: NavBarFragment;
}) {
  return (
    <div className={className}>
      <ThemeSwitch />
      <NavBar navBar={navBar} />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
