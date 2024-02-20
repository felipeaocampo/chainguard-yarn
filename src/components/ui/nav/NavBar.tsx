import { useNavDropdown } from "@/hooks/useNavDropdown";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

const logoUrl =
  "https://assets-global.website-files.com/6228fdbc6c97145dad2a9c2b/63d332f5a1dabc1b04f0679d_Brand%20Logo.svg";

export default function NavBar() {
  const {
    hovered: productsColHover,
    showing: productsColShowing,
    handleDropdownHoverEnter: handleProductsColEnter,
    handleDropdownHoverExit: handleProductsColExit,
  } = useNavDropdown();

  const {
    hovered: solutionsColHover,
    showing: solutionsColShowing,
    handleDropdownHoverEnter: handleSolutionsColEnter,
    handleDropdownHoverExit: handleSolutionsColExit,
  } = useNavDropdown();

  const handleLinkClick = () => {
    //TEMPORARY HANDLE CLICK
    console.log("click");
  };

  return (
    <header className="flex justify-between max-w-screen-xl mx-auto py-5 absolute w-full left-[50%] translate-x-[-50%]">
      <div className="logo-wrapper flex items-center">
        <Link href="/">
          <Image src={logoUrl} alt="Chainguard Logo" width={146} height={28} />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-5 items-center text-[14px]">
          <div
            className="relative"
            onMouseEnter={handleProductsColEnter}
            onMouseLeave={handleProductsColExit}
          >
            <div className="cursor-pointer font-[500]">Products</div>
            <div
              className={`absolute transition-all duration-300 opacity-0 ${
                productsColHover ? "block" : "hidden"
              } ${productsColShowing ? "opacity-100" : ""}`}
            >
              <div className="w-[270px] h-7"></div>
              <ul
                className={`p-4 bg-red-300 leading-none w-[270px] rounded-lg`}
              >
                <li className="" onClick={handleLinkClick}>
                  <Link
                    href="/chainguard-images"
                    className="block p-2 hover:bg-green-300 rounded-lg text-inherit"
                  >
                    Chainguard Images
                  </Link>
                </li>
                <li className="" onClick={handleLinkClick}>
                  <Link
                    href="/"
                    className="block p-2 hover:bg-green-300 rounded-lg text-inherit"
                  >
                    Chainguard Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="relative"
            onMouseEnter={handleSolutionsColEnter}
            onMouseLeave={handleSolutionsColExit}
          >
            <div className="cursor-pointer font-[500]">Solutions</div>
            <div
              className={`absolute transition-all duration-300 opacity-0 ${
                solutionsColHover ? "block" : "hidden"
              } ${solutionsColShowing ? "opacity-100" : ""}`}
            >
              <div className="w-[270px] h-7"></div>
              <ul
                className={`p-4 bg-red-300 leading-none w-[270px] rounded-lg`}
              >
                <li className="" onClick={handleLinkClick}>
                  <Link
                    href="/chainguard-images"
                    className="block p-2 hover:bg-green-300 rounded-lg text-inherit"
                  >
                    Container Image Security
                  </Link>
                </li>
                <li className="" onClick={handleLinkClick}>
                  <Link
                    href="/"
                    className="block p-2 hover:bg-green-300 rounded-lg text-inherit"
                  >
                    Vulnerability Remediation
                  </Link>
                </li>
                <li className="" onClick={handleLinkClick}>
                  <Link
                    href="/"
                    className="block p-2 hover:bg-green-300 rounded-lg text-inherit"
                  >
                    Open Source Software Security
                  </Link>
                </li>
                <li className="" onClick={handleLinkClick}>
                  <Link
                    href="/"
                    className="block p-2 hover:bg-green-300 rounded-lg text-inherit"
                  >
                    Compliance & Risk Mitigation
                  </Link>
                </li>
                <li className="" onClick={handleLinkClick}>
                  <Link
                    href="/"
                    className="block p-2 hover:bg-green-300 rounded-lg text-inherit"
                  >
                    Software Supplychain Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/open-source">Open Source</Link>
          <Link href="/unchained">Unchained</Link>
          <Link href="/about">Company</Link>
          <Link
            href="https://console.enforce.dev/auth/login"
            target="_blank"
            className="bg-red-500 py-2 px-4 border border-solid border-black rounded-md text-white"
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className="bg-red-500 py-2 px-4 border border-solid border-black rounded-md text-white"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}
