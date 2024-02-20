import NavBar from "./nav/NavBar";
import Footer from "./footer/Footer";

export default function Layout({ children }: { children?: React.ReactNode }) {
  //
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
