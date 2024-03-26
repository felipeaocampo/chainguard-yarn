import Image from "next/image";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import {
  HomeGeneralContentCardFragment,
  PageSection,
} from "@/lib/__generated/sdk";

export default function HomeSection5({
  homeSection5Data,
}: {
  homeSection5Data: PageSection | null;
}) {
  const [
    mainContentCard,
    benefitsItem1,
    benefitsItem2,
    benefitsItem3,
    benefitsItem4,
  ] = (homeSection5Data?.pageSectionPartsCollection?.items || []) as (
    | HomeGeneralContentCardFragment
    | undefined
  )[];

  const inspectorPropsMainGCC = useContentfulInspectorMode({
    entryId: mainContentCard?.sys.id || "",
  });
  const inspectorPropsBen1 = useContentfulInspectorMode({
    entryId: benefitsItem1?.sys.id || "",
  });
  const inspectorPropsBen2 = useContentfulInspectorMode({
    entryId: benefitsItem2?.sys.id || "",
  });
  const inspectorPropsBen3 = useContentfulInspectorMode({
    entryId: benefitsItem3?.sys.id || "",
  });
  const inspectorPropsBen4 = useContentfulInspectorMode({
    entryId: benefitsItem4?.sys.id || "",
  });

  if (
    !homeSection5Data ||
    !mainContentCard ||
    !benefitsItem1 ||
    !benefitsItem2 ||
    !benefitsItem3 ||
    !benefitsItem4
  ) {
    return null;
  }

  const benefitsListItemsWithInspectorProps: [
    HomeGeneralContentCardFragment,
    ReturnType<typeof useContentfulInspectorMode<{ entryId: string }>>
  ][] = [
    [benefitsItem1, inspectorPropsBen1],
    [benefitsItem2, inspectorPropsBen2],
    [benefitsItem3, inspectorPropsBen3],
    [benefitsItem4, inspectorPropsBen4],
  ];

  //const [[ctaLink, ctaText]] = Object.entries(mainContentCard.ctas) as any[];

  return (
    <section className="w-[90%] max-w-[1152px] mx-auto">
      <div className="section-2-header-text mb-[48px] w-full max-w-[564px]">
        <h3
          {...inspectorPropsMainGCC({ fieldId: "heading" })}
          className="text-[14px] uppercase tracking-[.64px] mb-[24px]"
        >
          {mainContentCard.heading}
        </h3>
        <p
          {...inspectorPropsMainGCC({ fieldId: "subheading" })}
          className="text-[36px] font-semibold leading-[43.2px] mb-[12px] tracking-[-.02em]"
        >
          {mainContentCard.subheading}
        </p>
        <p
          {...inspectorPropsMainGCC({ fieldId: "descriptionText" })}
          className="mb-[24px]"
        >
          {mainContentCard.descriptionText}
        </p>
      </div>
      <div className="benefits-list-container">
        <ul className="grid grid-cols-2 gap-[24px] md:grid-cols-4">
          {benefitsListItemsWithInspectorProps.map(
            ([benefitItem, iProps], i) => (
              <li key={benefitItem.sys.id || i} className="mb-[24px]">
                <div className="benefit-item-container">
                  <div className="benefit-item-icon-wrapper mb-[12px]">
                    <Image
                      {...iProps({ fieldId: "media" })}
                      src={benefitItem.mediaCollection?.items[0]?.url || ""}
                      alt={benefitItem.mediaCollection?.items[0]?.url || ""}
                      width={32}
                      height={32}
                    />
                  </div>
                  <p
                    {...iProps({ fieldId: "heading" })}
                    className="font-medium mb-[5px]"
                  >
                    {benefitItem.heading}
                  </p>
                  <p
                    {...iProps({ fieldId: "subheading" })}
                    className="text-[14px] text-cg-text-color-gray"
                  >
                    {benefitItem.subheading}
                  </p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
    </section>
  );
}
