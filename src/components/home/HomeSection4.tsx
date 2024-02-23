import Image from "next/image";
import Link from "next/link";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import HomeSlider from "./slider/HomeSlider";

export type ContentfulImgType = {
  __typename: string;
  sys: {
    id: string;
  };
  url: string;
  description: string;
  width: number;
  height: number;
};

export type HomeSection4Props = {
  __typename: string;
  sys: {
    id: string;
  };
  pageSectionPartsCollection: {
    __typename: string;
    items: (HomeGCCSec4TypeA | HomeGCCSec4TypeB)[];
  };
};

type HomeGCCSec4TypeA = {
  __typename: string;
  sys: {
    id: string;
  };
  heading: string;
  subheading: string;
  descriptionText: string;
  ctas: {
    [key: string]: string;
  };
  mediaCollection: ContentfulImgType[];
};

export type HomeGCCSec4TypeB = {
  __typename: string;
  sys: {
    id: string;
  };
  heading: string;
  subheading: string;
  mediaCollection: {
    items: ContentfulImgType[];
  };
};

export default function HomeSection4({
  homeSection4Data,
}: {
  homeSection4Data: HomeSection4Props;
}) {
  const mainContentCard = homeSection4Data.pageSectionPartsCollection
    ?.items[0] as HomeGCCSec4TypeA;

  const slideCard1 = homeSection4Data.pageSectionPartsCollection
    ?.items[1] as HomeGCCSec4TypeB;
  const slideCard2 = homeSection4Data.pageSectionPartsCollection
    ?.items[2] as HomeGCCSec4TypeB;
  const slideCard3 = homeSection4Data.pageSectionPartsCollection
    ?.items[3] as HomeGCCSec4TypeB;
  const slideCard4 = homeSection4Data.pageSectionPartsCollection
    ?.items[4] as HomeGCCSec4TypeB;

  const inspectorPropsGCC = useContentfulInspectorMode({
    entryId: mainContentCard.sys.id,
  });
  const inspectorPropsSli1 = useContentfulInspectorMode({
    entryId: slideCard1.sys.id,
  });
  const inspectorPropsSli2 = useContentfulInspectorMode({
    entryId: slideCard2.sys.id,
  });
  const inspectorPropsSli3 = useContentfulInspectorMode({
    entryId: slideCard3.sys.id,
  });
  const inspectorPropsSli4 = useContentfulInspectorMode({
    entryId: slideCard4.sys.id,
  });

  const slideCardsWithInspectorProps: [
    HomeGCCSec4TypeB,
    ReturnType<typeof useContentfulInspectorMode<{ entryId: string }>>
  ][] = [
    [slideCard1, inspectorPropsSli1],
    [slideCard2, inspectorPropsSli2],
    [slideCard3, inspectorPropsSli3],
    [slideCard4, inspectorPropsSli4],
  ];

  const [[ctaLink, ctaText]] = Object.entries(mainContentCard.ctas);

  return (
    <section className="max-w-[1152px] mx-auto">
      <div className="section-2-header-text mb-[48px] w-1/2">
        <h3
          {...inspectorPropsGCC({ fieldId: "heading" })}
          className="text-[14px] uppercase tracking-[.64px] mb-[24px]"
        >
          {mainContentCard.heading}
        </h3>
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
        <Link
          {...inspectorPropsGCC({ fieldId: "ctas" })}
          href={ctaLink}
          className="inline-block py-[12px] px-[24px] bg-cg-text-blue text-white rounded-[4px] hover:bg-cg-hover-btn-bg-blue transition-all mb-[48px]"
        >
          {ctaText}
        </Link>
      </div>
      <HomeSlider slideCardsWithInspectorProps={slideCardsWithInspectorProps} />
      <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
    </section>
  );
}
