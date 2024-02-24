import Image from "next/image";
import Link from "next/link";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import {
  HomeGeneralContentCardFragment,
  PageSection,
} from "@/lib/__generated/sdk";

export default function HomeSection1({
  homeSection1Data,
}: {
  homeSection1Data: PageSection | null;
}) {
  const generalContentCard = homeSection1Data?.pageSectionPartsCollection
    ?.items[0] as HomeGeneralContentCardFragment | undefined;

  const inspectorPropsGCC = useContentfulInspectorMode({
    entryId: generalContentCard?.sys.id || "",
  });

  if (!homeSection1Data || !generalContentCard) {
    return null;
  }

  const [[ctaLink, ctaText]] = Object.entries(generalContentCard.ctas) as any[];

  return (
    <section
      className="flex flex-col items-center mb-[96px] pt-[180px] max-w-[1152px] mx-auto"
      style={{ width: "min(90%, 1152px)" }}
    >
      {/* <aside className="mb-[24px] text-[14px] py-[8px] px-[15px] border border-solid rounded-[100px]">
        <p className="flex gap-[6px]">
          {nonLinkFloatingText}
          <Link
            href={`/unchained${section1Props.floatingHeaderLink}`}
            className="text-cg-text-blue hover:text-cg-hover-btn-bg-blue"
          >
            {linkedFloatingText}
          </Link>
        </p>
      </aside> */}
      <h1
        {...inspectorPropsGCC({ fieldId: "heading" })}
        className="text-[48px] font-semibold mb-[12px] w-[500px] leading-[53px] text-center tracking-[-.02em]"
      >
        {generalContentCard.heading}
      </h1>
      <h2
        {...inspectorPropsGCC({ fieldId: "subheading" })}
        className="text-[18px] mb-[36px]"
      >
        {generalContentCard.subheading}
      </h2>
      <Link
        {...inspectorPropsGCC({ fieldId: "ctas" })}
        href={ctaLink}
        className="mb-[96px] py-[12px] px-[24px] bg-cg-text-blue text-white rounded-[4px] hover:bg-cg-hover-btn-bg-blue transition-all duration-[.4s]"
      >
        {ctaText}
      </Link>
      <Image
        {...inspectorPropsGCC({ fieldId: "media" })}
        src={
          generalContentCard.mediaCollection?.items[0] &&
          generalContentCard.mediaCollection?.items[0].url
            ? generalContentCard.mediaCollection.items[0].url
            : ""
        }
        alt={
          generalContentCard.mediaCollection?.items[0] &&
          generalContentCard.mediaCollection?.items[0].description
            ? generalContentCard.mediaCollection.items[0].description
            : ""
        }
        width={
          generalContentCard.mediaCollection?.items[0] &&
          generalContentCard.mediaCollection?.items[0].width
            ? +generalContentCard.mediaCollection.items[0].width
            : 0
        }
        height={
          generalContentCard.mediaCollection?.items[0] &&
          generalContentCard.mediaCollection?.items[0].height
            ? +generalContentCard.mediaCollection.items[0].height
            : 0
        }
      />
    </section>
  );
}
