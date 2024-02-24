import Link from "next/link";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import {
  HomeGeneralContentCardFragment,
  PageSection,
} from "@/lib/__generated/sdk";

export default function HomeSection6({
  homeSection6Data,
}: {
  homeSection6Data: PageSection | null;
}) {
  const mainContentCard = homeSection6Data?.pageSectionPartsCollection
    ?.items[0] as HomeGeneralContentCardFragment;
  const inspectorPropsMainGCC = useContentfulInspectorMode({
    entryId: mainContentCard?.sys.id || "",
  });
  //
  if (!homeSection6Data || !mainContentCard) {
    return null;
  }

  const [[ctaLink, ctaText]] = Object.entries(mainContentCard.ctas) as any[];

  return (
    <section className="w-11/1 max-w-[1152px] mx-auto">
      <div className="section-2-header-text w-1/2">
        <h3
          {...inspectorPropsMainGCC({ fieldId: "heading" })}
          className="text-[24px] font-[600] leading-[32px] mb-[12px]"
        >
          {mainContentCard.heading}
        </h3>
        <p
          {...inspectorPropsMainGCC({ fieldId: "subheading" })}
          className="mb-[24px]"
        >
          {mainContentCard.subheading}
        </p>
        <Link
          {...inspectorPropsMainGCC({ fieldId: "ctas" })}
          href={ctaLink}
          className="inline-block py-[12px] px-[24px] bg-cg-text-blue text-white rounded-[4px] hover:bg-cg-hover-btn-bg-blue transition-all mb-[24px]"
        >
          {ctaText}
        </Link>
      </div>
      <div className="divider-line pt-[96px]"></div>
    </section>
  );
}
