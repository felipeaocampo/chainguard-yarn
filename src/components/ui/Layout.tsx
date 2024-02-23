import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";
import { HTMLProps, ReactNode } from "react";

export default function Layout({
  children,
  className,
}: {
  children?: ReactNode;
  className: string;
}) {
  //
  return (
    <div className={className}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
