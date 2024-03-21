import { useNavDropdown } from "@/hooks/useNavDropdown";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const regularLogoUrl =
  "https://assets-global.website-files.com/6228fdbc6c97145dad2a9c2b/63d332f5a1dabc1b04f0679d_Brand%20Logo.svg";

const OpenSourcePageLogoUrl =
  "https://assets-global.website-files.com/6228fdbc6c97145dad2a9c2b/6418e1a7694ef47dbe4b0737_chainguard%20white%20logo.svg";

export default function NavBar() {
  //GET URL TO FIND OUT IF NAV NEEDS TO BE OPEN SOURCE NAV OR CAN JUST BE REGULAR NAV!
  const { route } = useRouter();
  // console.log("ROUTER: ", router);

  const isOpenSourcePage = route.includes("/open-source");

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

  const {
    hovered: developerColHover,
    showing: developerColShowing,
    handleDropdownHoverEnter: handleDeveloperColEnter,
    handleDropdownHoverExit: handleDeveloperColExit,
  } = useNavDropdown();

  const {
    hovered: resourcesColHover,
    showing: resourcesColShowing,
    handleDropdownHoverEnter: handleResourcesColEnter,
    handleDropdownHoverExit: handleResourcesColExit,
  } = useNavDropdown();

  const {
    hovered: companyColHover,
    showing: companyColShowing,
    handleDropdownHoverEnter: handleCompanyColEnter,
    handleDropdownHoverExit: handleCompanyColExit,
  } = useNavDropdown();

  const handleLinkClick = () => {
    //TEMPORARY HANDLE CLICK
    console.log("click");
  };

  return (
    <header className="hidden relative md:block">
      <div className="flex justify-between max-w-[90%] mx-auto py-[22px] w-[90%] absolute left-[50%] translate-x-[-50%]">
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
        <nav>
          <ul className="flex gap-[24px] items-center text-[14px]">
            <div
              className="relative"
              onMouseEnter={handleProductsColEnter}
              onMouseLeave={handleProductsColExit}
            >
              <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                Products
              </div>
              <div
                className={`absolute transition-all duration-300 opacity-0 ${
                  productsColHover ? "block" : "hidden"
                } ${productsColShowing ? "opacity-100" : ""}`}
              >
                <div className="w-[270px] h-7"></div>
                <ul
                  className={`p-4 bg-white leading-none w-[270px] rounded-lg`}
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
            <div
              className="relative"
              onMouseEnter={handleSolutionsColEnter}
              onMouseLeave={handleSolutionsColExit}
            >
              <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                Solutions
              </div>
              <div
                className={`absolute transition-all duration-300 opacity-0 ${
                  solutionsColHover ? "block" : "hidden"
                } ${solutionsColShowing ? "opacity-100" : ""}`}
              >
                <div className="w-[270px] h-7"></div>
                <ul
                  className={`p-4 bg-white leading-none w-[270px] rounded-lg`}
                >
                  <li className="" onClick={() => {}}>
                    <Link
                      href="/solutions/container-image-security"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      Container Image Security
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
                    <Link
                      href="/solutions/vulnerability-remediation"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      Vulnerability Remediation
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
                    <Link
                      href="/solutions/open-source-software-security"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      Open Source Software Security
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
                    <Link
                      href="/solutions/compliance-risk-mitigation"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      Compliance & Risk Mitigation
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
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
            <div
              className="relative"
              onMouseEnter={handleDeveloperColEnter}
              onMouseLeave={handleDeveloperColExit}
            >
              <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                Developer
              </div>
              <div
                className={`absolute transition-all duration-300 opacity-0 ${
                  developerColHover ? "block" : "hidden"
                } ${developerColShowing ? "opacity-100" : ""}`}
              >
                <div className="w-[270px] h-7"></div>
                <ul
                  className={`p-4 bg-white leading-none w-[270px] rounded-lg`}
                >
                  <li className="" onClick={() => {}}>
                    <Link
                      href="https://edu.chainguard.dev/"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      Docs
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
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
            <div
              className="relative"
              onMouseEnter={handleResourcesColEnter}
              onMouseLeave={handleResourcesColExit}
            >
              <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                Resources
              </div>
              <div
                className={`absolute transition-all duration-300 opacity-0 ${
                  resourcesColHover ? "block" : "hidden"
                } ${resourcesColShowing ? "opacity-100" : ""}`}
              >
                <div className="w-[270px] h-7"></div>
                <ul
                  className={`p-4 bg-white leading-none w-[270px] rounded-lg`}
                >
                  <li className="" onClick={() => {}}>
                    <Link
                      href="/unchained"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      Unchained blog
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
                    <Link
                      href="/labs"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      Chainguard Labs
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
                    <Link
                      href="/customers"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      Customer stories
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
                    <Link
                      href="/security"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      Security
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
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
            <div
              className="relative"
              onMouseEnter={handleCompanyColEnter}
              onMouseLeave={handleCompanyColExit}
            >
              <div className="cursor-pointer font-[500] text-cg-text-color-gray">
                Company
              </div>
              <div
                className={`absolute transition-all duration-300 opacity-0 ${
                  companyColHover ? "block" : "hidden"
                } ${companyColShowing ? "opacity-100" : ""}`}
              >
                <div className="w-[270px] h-7"></div>
                <ul
                  className={`p-4 bg-white leading-none w-[270px] rounded-lg`}
                >
                  <li className="" onClick={() => {}}>
                    <Link
                      href="/about"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      About
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
                    <Link
                      href="/newsroom"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      Newsroom
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
                    <Link
                      href="/careers"
                      className="block p-[12px] hover:bg-cg-bg-violet rounded-lg text-inherit"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="" onClick={() => {}}>
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
            <Link
              href="https://console.enforce.dev/auth/login"
              target="_blank"
              className="py-[8px] bg-transparent text-cg-text-blue px-[12px] border border-solid border-cg-btn-border-light-blue rounded-[4px] font-[500] leading-[20px] transition-all duration-[.4s] hover:bg-cg-hover-btn-bg-blue hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/contact"
              className="py-[8px] text-white bg-cg-text-blue px-[12px] border border-solid border-cg-text-blue rounded-[4px] font-[500] leading-[20px] transition-all duration-[.4s] hover:bg-cg-hover-btn-bg-blue"
            >
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
