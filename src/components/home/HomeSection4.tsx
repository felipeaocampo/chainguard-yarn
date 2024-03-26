import Image from "next/image";
import Link from "next/link";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import HomeSlider from "./slider/HomeSlider";
import {
  HomeGeneralContentCardFragment,
  PageSection,
} from "@/lib/__generated/sdk";

export default function HomeSection4({
  homeSection4Data,
}: {
  homeSection4Data: PageSection | null;
}) {
  const [mainContentCard, slideCard1, slideCard2, slideCard3, slideCard4] =
    (homeSection4Data?.pageSectionPartsCollection?.items || []) as (
      | HomeGeneralContentCardFragment
      | undefined
    )[];

  const inspectorPropsGCC = useContentfulInspectorMode({
    entryId: mainContentCard?.sys.id || "",
  });
  const inspectorPropsSli1 = useContentfulInspectorMode({
    entryId: slideCard1?.sys.id || "",
  });
  const inspectorPropsSli2 = useContentfulInspectorMode({
    entryId: slideCard2?.sys.id || "",
  });
  const inspectorPropsSli3 = useContentfulInspectorMode({
    entryId: slideCard3?.sys.id || "",
  });
  const inspectorPropsSli4 = useContentfulInspectorMode({
    entryId: slideCard4?.sys.id || "",
  });

  if (
    !homeSection4Data ||
    !mainContentCard ||
    !slideCard1 ||
    !slideCard2 ||
    !slideCard3 ||
    !slideCard4
  ) {
    return null;
  }

  const slideCardsWithInspectorProps: [
    HomeGeneralContentCardFragment,
    ReturnType<typeof useContentfulInspectorMode<{ entryId: string }>>
  ][] = [
    [slideCard1, inspectorPropsSli1],
    [slideCard2, inspectorPropsSli2],
    [slideCard3, inspectorPropsSli3],
    [slideCard4, inspectorPropsSli4],
  ];

  const [[ctaLink, ctaText]] = Object.entries(mainContentCard.ctas) as any[];

  return (
    <section className="overflow-hidden">
      <div className="section-2-header-text w-[90%] mx-auto max-w-[1152px]">
        <h3
          {...inspectorPropsGCC({ fieldId: "heading" })}
          className="text-[14px] uppercase tracking-[.64px] mb-[24px]"
        >
          {mainContentCard.heading}
        </h3>
        <div className="headers w-full md:max-w-[564px]">
          <p
            {...inspectorPropsGCC({ fieldId: "subheading" })}
            className="text-[36px] font-semibold leading-[43.2px] mb-[12px]"
          >
            {mainContentCard.subheading}
          </p>
          <p
            {...inspectorPropsGCC({ fieldId: "descriptionText" })}
            className="mb-[24px]"
          >
            {mainContentCard.descriptionText}
          </p>
        </div>

        <Link
          {...inspectorPropsGCC({ fieldId: "ctas" })}
          href={ctaLink}
          className="inline-block py-[12px] px-[24px] bg-cg-text-blue text-white rounded-[4px] hover:bg-cg-hover-btn-bg-blue transition-all mb-[48px]"
        >
          {ctaText}
        </Link>
      </div>
      <HomeSlider slideCardsWithInspectorProps={slideCardsWithInspectorProps} />
      <div className="divider-line-container w-[90%] mx-auto max-w-[1152px]">
        <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
      </div>
    </section>
  );
}
