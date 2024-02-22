import Image from "next/image";
import Link from "next/link";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import ChainguardImagesPerformanceTabs from "./tabs/ChainguardImagesPerformanceTabs";

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

export type HomeSection3Props = {
  __typename: string;
  sys: {
    id: string;
  };
  pageSectionPartsCollection: {
    __typename: string;
    items: (HomeGCCSec3TypeA | HomeGCCSec3TypeB)[];
  };
};

type HomeGCCSec3TypeA = {
  __typename: string;
  sys: {
    id: string;
  };
  heading: string;
  subheading: string;
  description: string;
  ctas: {
    [key: string]: string;
  };
};

type HomeGCCSec3TypeB = {
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

export default function HomeSection3({
  homeSection3Data,
}: {
  homeSection3Data: HomeSection3Props;
}) {
  const mainContentCard = homeSection3Data.pageSectionPartsCollection
    ?.items[0] as HomeGCCSec3TypeA;

  const benefitCard1 = homeSection3Data.pageSectionPartsCollection
    ?.items[1] as HomeGCCSec3TypeB;
  const benefitCard2 = homeSection3Data.pageSectionPartsCollection
    ?.items[2] as HomeGCCSec3TypeB;
  const benefitCard3 = homeSection3Data.pageSectionPartsCollection
    ?.items[3] as HomeGCCSec3TypeB;
  const benefitCard4 = homeSection3Data.pageSectionPartsCollection
    ?.items[4] as HomeGCCSec3TypeB;

  const inspectorPropsGCC = useContentfulInspectorMode({
    entryId: mainContentCard.sys.id,
  });
  const inspectorPropsBen1 = useContentfulInspectorMode({
    entryId: benefitCard1.sys.id,
  });
  const inspectorPropsBen2 = useContentfulInspectorMode({
    entryId: benefitCard2.sys.id,
  });
  const inspectorPropsBen3 = useContentfulInspectorMode({
    entryId: benefitCard3.sys.id,
  });
  const inspectorPropsBen4 = useContentfulInspectorMode({
    entryId: benefitCard4.sys.id,
  });

  const benefitCardsWithInspectorProps: [
    HomeGCCSec3TypeB,
    ReturnType<typeof useContentfulInspectorMode<{ entryId: string }>>
  ][] = [
    [benefitCard1, inspectorPropsBen1],
    [benefitCard2, inspectorPropsBen2],
    [benefitCard3, inspectorPropsBen3],
    [benefitCard4, inspectorPropsBen4],
  ];

  const [[ctaLink, ctaText]] = Object.entries(mainContentCard.ctas);

  return (
    <section className="w-11/1 max-w-[1152px] mx-auto">
      <div className="flex">
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
            {...inspectorPropsGCC({ fieldId: "description" })}
            className="mb-[24px]"
          >
            {mainContentCard.description}
          </p>
          <Link
            {...inspectorPropsGCC({ fieldId: "ctas" })}
            href={ctaLink}
            className="inline-block py-[12px] px-[24px] bg-cg-text-blue text-white rounded-[4px] hover:bg-cg-hover-btn-bg-blue transition-all mb-[48px]"
          >
            {ctaText}
          </Link>
          <div className="benefits-list-container">
            <ul>
              {benefitCardsWithInspectorProps.map(([card, iProps]) => {
                return (
                  <li key={card.sys.id} className="mb-[24px]">
                    <div className="benefit-item-container flex gap-[10px]">
                      <div className="benefit-item-icon-wrapper">
                        <Image
                          {...iProps({ fieldId: "media" })}
                          src={card.mediaCollection.items[0].url}
                          alt={card.mediaCollection.items[0].description}
                          width={card.mediaCollection.items[0].width}
                          height={card.mediaCollection.items[0].height}
                        />
                      </div>
                      <div className="benefit-item-text-container leading-none">
                        <p
                          {...iProps({ fieldId: "heading" })}
                          className="font-medium mb-[10px]"
                        >
                          {card.heading}
                        </p>
                        <p
                          {...iProps({ fieldId: "subheading" })}
                          className="text-[14px] text-cg-text-color-gray"
                        >
                          {card.subheading}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="section-2-header-text mb-[48px] w-1/2 ">
          <ChainguardImagesPerformanceTabs />
        </div>
      </div>
      <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
    </section>
  );
}
