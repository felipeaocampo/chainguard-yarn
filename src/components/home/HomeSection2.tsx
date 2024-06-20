import Image from "next/image";
import Link from "next/link";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import {
  CustomersSection,
  HomeGeneralContentCardFragment,
  PageSection,
} from "@/lib/__generated/sdk";
import { useTheme } from "next-themes";

export default function HomeSection2({
  homeSection2Data,
}: {
  homeSection2Data: PageSection | null;
}) {
  const { theme } = useTheme();

  const generalContentCard = homeSection2Data?.pageSectionPartsCollection
    ?.items[0] as HomeGeneralContentCardFragment | undefined;

  const customersDataHub = homeSection2Data?.pageSectionPartsCollection
    ?.items[1] as CustomersSection | undefined;

  const inspectorPropsGCC = useContentfulInspectorMode({
    entryId: generalContentCard?.sys.id || "",
  });
  const inspectorPropsCust = useContentfulInspectorMode({
    entryId: customersDataHub?.sys.id || "",
  });

  if (!homeSection2Data || !generalContentCard || !customersDataHub) {
    return null;
  }

  const [[ctaLink, ctaText]] = Object.entries(generalContentCard.ctas) as any[];

  return (
    <section className="mb-[96px]">
      <div className="section-2-header-text mx-auto mb-[48px] w-[90%] max-w-[1152px]">
        <h3
          {...inspectorPropsGCC({ fieldId: "heading" })}
          className="mb-[24px] text-[14px] uppercase tracking-[.64px]"
        >
          {generalContentCard.heading}
        </h3>
        <p
          {...inspectorPropsGCC({ fieldId: "subheading" })}
          className="text-[36px] font-semibold leading-[43.2px] tracking-[-.02em]"
        >
          {generalContentCard.subheading}
        </p>
      </div>
      <div
        {...inspectorPropsCust({ fieldId: "selectTestimonials" })}
        className="testimonial-cards-container mx-auto mb-[48px] flex w-[90%] max-w-[1152px] flex-wrap gap-[22px] md:flex-nowrap"
      >
        {customersDataHub?.selectTestimonialsCollection?.items.map(
          (testimonialCardData, i) => {
            if (!testimonialCardData) {
              return null;
            }

            return (
              <div
                className="testimonial-card group w-full rounded-[8px] border border-solid p-[24px] md:w-[50%] md:p-[48px]"
                key={testimonialCardData.sys.id}
              >
                <div className="testimonial-img-container mb-[24px]">
                  <Image
                    src={testimonialCardData?.logo?.url || ""}
                    alt={testimonialCardData?.logo?.description || ""}
                    width={96}
                    height={testimonialCardData.logo?.height || 0}
                  />
                </div>
                <p className="mb-[24px] line-clamp-3 md:mb-[36px]">
                  {testimonialCardData.testimonial}
                </p>
                {/* <p className="mb-[24px] h-[72px] overflow-y-clip relative after:content-['...'] after:bottom-0 after:right-0 after:translate-x-[-10px] after:absolute">
            {testimonialCardData.testimonial}
          </p> */}
                <div className="testimonial-card-bottom flex flex-wrap justify-between md:flex-nowrap">
                  <div className="testimonial-user flex flex-col text-[14px]">
                    <p className="font-[500]">
                      {testimonialCardData.customerName}
                    </p>
                    <p className="mb-[24px] font-[500] text-[#545454] md:mb-0">
                      {testimonialCardData.titleposition}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="w-full rounded-[4px] border border-solid border-cg-btn-border-light-blue bg-white px-[24px] py-[12px] text-center text-cg-text-blue transition-all duration-[.4s] group-hover:bg-cg-hover-btn-bg-blue group-hover:text-white md:w-fit"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            );
          },
        )}
      </div>
      <div
        {...inspectorPropsCust({ fieldId: "selectCustomerLogos" })}
        className="customer-logos-container no-scrollbar mb-[24px] ml-[5%] flex max-w-[1152px] gap-[32px] overflow-x-scroll mx:mx-auto mx:w-[90%]"
      >
        {customersDataHub?.selectCustomerLogosCollection?.items.map(
          (customerLogo, i, arr) => {
            return (
              <Image
                className={arr.length - 1 === i ? "mr-[32px]" : ""}
                key={customerLogo?.sys?.id || i}
                src={customerLogo?.url || ""}
                alt={customerLogo?.description || ""}
                width={customerLogo?.width || 0}
                height={customerLogo?.height || 0}
              />
            );
          },
        )}
      </div>
      <Link
        {...inspectorPropsGCC({ fieldId: "ctas" })}
        href={ctaLink}
        className="mx-auto my-[24px] block w-[90%] max-w-[1152px] text-cg-text-blue"
      >
        {ctaText}
      </Link>
      <div className="divider-line-container mx-auto w-[90%] max-w-[1152px]">
        <div className="divider-line mb-[96px] w-[85px] border-b border-solid pt-[96px]"></div>
      </div>
    </section>
  );
}
