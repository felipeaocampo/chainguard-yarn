import Image from "next/image";
import Link from "next/link";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";

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

type HomeGCCSec4TypeB = {
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

  const benefitCardsWithInspectorProps: [
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
    <section className="w-11/1 max-w-[1152px] mx-auto">
      <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
    </section>
  );
}
