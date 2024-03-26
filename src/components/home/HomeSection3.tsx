import Image from "next/image";
import Link from "next/link";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import ChainguardImagesPerformanceTabs from "./tabs/ChainguardImagesPerformanceTabs";
import {
  HomeGeneralContentCardFragment,
  PageSection,
} from "@/lib/__generated/sdk";

export default function HomeSection3({
  homeSection3Data,
}: {
  homeSection3Data: PageSection | null;
}) {
  const [
    mainContentCard,
    benefitCard1,
    benefitCard2,
    benefitCard3,
    benefitCard4,
  ] = (homeSection3Data?.pageSectionPartsCollection?.items || []) as (
    | HomeGeneralContentCardFragment
    | undefined
  )[];

  const inspectorPropsGCC = useContentfulInspectorMode({
    entryId: mainContentCard?.sys.id || "",
  });
  const inspectorPropsBen1 = useContentfulInspectorMode({
    entryId: benefitCard1?.sys.id || "",
  });
  const inspectorPropsBen2 = useContentfulInspectorMode({
    entryId: benefitCard2?.sys.id || "",
  });
  const inspectorPropsBen3 = useContentfulInspectorMode({
    entryId: benefitCard3?.sys.id || "",
  });
  const inspectorPropsBen4 = useContentfulInspectorMode({
    entryId: benefitCard4?.sys.id || "",
  });

  if (
    !homeSection3Data ||
    !mainContentCard ||
    !benefitCard1 ||
    !benefitCard2 ||
    !benefitCard3 ||
    !benefitCard4
  ) {
    return null;
  }

  const benefitCardsWithInspectorProps: [
    HomeGeneralContentCardFragment,
    ReturnType<typeof useContentfulInspectorMode<{ entryId: string }>>
  ][] = [
    [benefitCard1, inspectorPropsBen1],
    [benefitCard2, inspectorPropsBen2],
    [benefitCard3, inspectorPropsBen3],
    [benefitCard4, inspectorPropsBen4],
  ];

  const [[ctaLink, ctaText]] = Object.entries(mainContentCard.ctas) as any[];

  return (
    <section className="w-[90%] mx-auto max-w-[1152px]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="section-2-header-text mb-[48px]">
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
            {mainContentCard.descriptionText}
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
                      <div className="benefit-item-icon-wrapper shrink-0">
                        <Image
                          {...iProps({ fieldId: "media" })}
                          src={
                            (card.mediaCollection?.items[0] &&
                              card.mediaCollection?.items[0].url) ||
                            ""
                          }
                          alt={
                            (card.mediaCollection?.items[0] &&
                              card?.mediaCollection?.items[0].description) ||
                            ""
                          }
                          width={
                            (card.mediaCollection?.items[0] &&
                              card.mediaCollection?.items[0].width) ||
                            0
                          }
                          height={
                            (card.mediaCollection?.items[0] &&
                              card.mediaCollection?.items[0].height) ||
                            0
                          }
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
                          className="text-[14px] text-cg-text-color-gray leading-[150%] font-[400]"
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
        <div className="section-2-header-text ">
          <ChainguardImagesPerformanceTabs />
        </div>
      </div>
      <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
    </section>
  );
}
