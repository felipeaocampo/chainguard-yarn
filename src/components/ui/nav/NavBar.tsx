import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavBarFragment } from "@/lib/__generated/sdk";
import Logo from "./Logo";

const logoLight =
  "https://images.ctfassets.net/5osmwku1bn9f/7nHoM2SpY8y2N25VC38DQ6/7a04b0f5ce357c5d2d469f98bfa43f9b/main-logo-light.svg";

const logoDark =
  "https://images.ctfassets.net/5osmwku1bn9f/2OFa8U68…b108d7c822ad9ad54529b93deb0cda/main-logo-dark.svg";

export default function NavBar({ navBar }: { navBar: NavBarFragment }) {
  const [clicked, setClicked] = useState(false);

  // const { theme } = useTheme();
  // console.log("theme: ", theme);
  // console.log("navBar: ", navBar);

  // TODO: INCREASE THE Z-INDEX OF SIGN-UP AND CONTACT BTNS SO LAST DROPDOWN MENU DOESNT COVER OVER THEM

  const handleLinkClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked((prev) => !prev);
    }, 100);
  };

  const handleMobileOpenIconClick = () => {
    console.log("mobile open clicked!");
  };

  return (
    <header className="relative md:block">
      <div className="absolute left-[50%] mx-auto flex w-[90%] max-w-[90%] translate-x-[-50%] items-center justify-between py-[22px]">
        <div className="logo-wrapper flex items-center ">
          {/* <Link href="/">{!theme || theme === "light" ? light : dark}</Link> */}
          <Link href="/">
            <Logo navBar={navBar} />
          </Link>
        </div>
        <nav className="desktop-nav hidden lg:block">
          <ul className="flex items-center gap-[24px] text-[14px]">
            <li>
              <div className="group relative">
                <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                  Products
                </div>
                <div
                  className={`pointer-events-none absolute pt-[28px] opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 ${
                    clicked ? "hidden" : "block"
                  }`}
                >
                  <ul
                    className={`w-[270px] rounded-lg bg-white p-4 leading-none shadow-card`}
                  >
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/chainguard-images"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Chainguard Images
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Chainguard Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="group relative">
                <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                  Solutions
                </div>
                <div
                  className={`pointer-events-none absolute pt-[28px] opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 ${
                    clicked ? "hidden" : "block"
                  }`}
                >
                  <ul
                    className={`w-[270px] rounded-lg bg-white p-4 leading-none shadow-card`}
                  >
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/solutions/container-image-security"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Container Image Security
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/solutions/vulnerability-remediation"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Vulnerability Remediation
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/solutions/open-source-software-security"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Open Source Software Security
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/solutions/compliance-risk-mitigation"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Compliance & Risk Mitigation
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/solutions/software-supplychain-security"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Software Supplychain Security
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="group relative">
                <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                  Developer
                </div>
                <div
                  className={`pointer-events-none absolute pt-[28px] opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 ${
                    clicked ? "hidden" : "block"
                  }`}
                >
                  <ul
                    className={`w-[270px] rounded-lg bg-white p-4 leading-none shadow-card`}
                  >
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="https://edu.chainguard.dev/"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Docs
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/open-source"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Open source
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="group relative">
                <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                  Resources
                </div>
                <div
                  className={`pointer-events-none absolute pt-[28px] opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 ${
                    clicked ? "hidden" : "block"
                  }`}
                >
                  <ul
                    className={`w-[270px] rounded-lg bg-white p-4 leading-none shadow-card`}
                  >
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/unchained"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Unchained blog
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/labs"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Chainguard Labs
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/customers"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Customer stories
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/security"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Security
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="https://edu.chainguard.dev/"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Education
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="group relative">
                <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                  Company
                </div>
                <div
                  className={`pointer-events-none absolute pt-[28px] opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 ${
                    clicked ? "hidden" : "block"
                  }`}
                >
                  <ul
                    className={`w-[270px] rounded-lg bg-white p-4 leading-none shadow-card`}
                  >
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/about"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        About
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/newsroom"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Newsroom
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/careers"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/chainguard-love"
                        className="block rounded-lg p-[12px] text-inherit hover:bg-cg-bg-violet"
                      >
                        Chainguard love
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="https://console.enforce.dev/auth/login"
                target="_blank"
                className="rounded-[4px] border border-solid border-cg-btn-border-light-blue bg-transparent px-[12px] py-[8px] font-[500] leading-[20px] text-cg-text-blue transition-all duration-[.4s] hover:bg-cg-hover-btn-bg-blue hover:text-white"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="rounded-[4px] border border-solid border-cg-text-blue bg-cg-text-blue px-[12px] py-[8px] font-[500] leading-[20px] text-white transition-all duration-[.4s] hover:bg-cg-hover-btn-bg-blue"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="mobile-nav lg:hidden">
          <div className="hamburger-icon">
            <Image
              onClick={handleMobileOpenIconClick}
              src="/images/mobile-hamburger-icon.svg"
              alt="Chainguard website mobile open menu hamburger icon"
              width={30}
              height={30}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
