import { useNavDropdown } from "@/hooks/useNavDropdown";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const regularLogoUrl =
  "https://assets-global.website-files.com/6228fdbc6c97145dad2a9c2b/63d332f5a1dabc1b04f0679d_Brand%20Logo.svg";

const OpenSourcePageLogoUrl =
  "https://assets-global.website-files.com/6228fdbc6c97145dad2a9c2b/6418e1a7694ef47dbe4b0737_chainguard%20white%20logo.svg";

export default function NavBar() {
  //GET URL TO FIND OUT IF NAV NEEDS TO BE OPEN SOURCE NAV OR CAN JUST BE REGULAR NAV!
  const { route } = useRouter();
  // console.log("ROUTER: ", router);

  // TODO: INCREASE THE Z-INDEX OF SIGN-UP AND CONTACT BTNS SO LAST DROPDOWN MENU DOESNT COVER OVER THEM

  const [clicked, setClicked] = useState(false);

  const isOpenSourcePage = route.includes("/open-source");

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
      <div className="flex items-center justify-between max-w-[90%] mx-auto py-[22px] w-[90%] absolute left-[50%] translate-x-[-50%]">
        <div className="logo-wrapper flex items-center ">
          <Link href="/">
            <Image
              src={isOpenSourcePage ? OpenSourcePageLogoUrl : regularLogoUrl}
              alt="Chainguard Logo"
              width={146}
              height={28}
            />
          </Link>
        </div>
        <nav className="desktop-nav hidden lg:block">
          <ul className="flex gap-[24px] items-center text-[14px]">
            <li>
              <div className="relative group">
                <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                  Products
                </div>
                <div
                  className={`pt-[28px] absolute transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ${
                    clicked ? "hidden" : "block"
                  }`}
                >
                  <ul
                    className={`p-4 bg-white leading-none w-[270px] rounded-lg shadow-card`}
                  >
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/chainguard-images"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Chainguard Images
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Chainguard Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="relative group">
                <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                  Solutions
                </div>
                <div
                  className={`pt-[28px] absolute transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ${
                    clicked ? "hidden" : "block"
                  }`}
                >
                  <ul
                    className={`p-4 bg-white leading-none w-[270px] rounded-lg shadow-card`}
                  >
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/solutions/container-image-security"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Container Image Security
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/solutions/vulnerability-remediation"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Vulnerability Remediation
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/solutions/open-source-software-security"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Open Source Software Security
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/solutions/compliance-risk-mitigation"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Compliance & Risk Mitigation
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/solutions/software-supplychain-security"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Software Supplychain Security
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="relative group">
                <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                  Developer
                </div>
                <div
                  className={`pt-[28px] absolute transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ${
                    clicked ? "hidden" : "block"
                  }`}
                >
                  <ul
                    className={`p-4 bg-white leading-none w-[270px] rounded-lg shadow-card`}
                  >
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="https://edu.chainguard.dev/"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Docs
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/open-source"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Open source
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="relative group">
                <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                  Resources
                </div>
                <div
                  className={`pt-[28px] absolute transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ${
                    clicked ? "hidden" : "block"
                  }`}
                >
                  <ul
                    className={`p-4 bg-white leading-none w-[270px] rounded-lg shadow-card`}
                  >
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/unchained"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Unchained blog
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/labs"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Chainguard Labs
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/customers"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Customer stories
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/security"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Security
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="https://edu.chainguard.dev/"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Education
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="relative group">
                <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                  Company
                </div>
                <div
                  className={`pt-[28px] absolute transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ${
                    clicked ? "hidden" : "block"
                  }`}
                >
                  <ul
                    className={`p-4 bg-white leading-none w-[270px] rounded-lg shadow-card`}
                  >
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/about"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        About
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/newsroom"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Newsroom
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/careers"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="" onClick={handleLinkClick}>
                      <Link
                        href="/chainguard-love"
                        className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
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
                className="py-[8px] bg-transparent text-cg-text-blue px-[12px] border border-solid border-cg-btn-border-light-blue rounded-[4px] font-[500] leading-[20px] transition-all duration-[.4s] hover:bg-cg-hover-btn-bg-blue hover:text-white"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="py-[8px] text-white bg-cg-text-blue px-[12px] border border-solid border-cg-text-blue rounded-[4px] font-[500] leading-[20px] transition-all duration-[.4s] hover:bg-cg-hover-btn-bg-blue"
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
