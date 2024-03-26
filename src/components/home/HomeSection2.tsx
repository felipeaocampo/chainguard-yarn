import Image from "next/image";
import Link from "next/link";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import {
  CustomersSection,
  HomeGeneralContentCardFragment,
  PageSection,
} from "@/lib/__generated/sdk";

export default function HomeSection2({
  homeSection2Data,
}: {
  homeSection2Data: PageSection | null;
}) {
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
      <div className="section-2-header-text mb-[48px] w-[90%] mx-auto max-w-[1152px]">
        <h3
          {...inspectorPropsGCC({ fieldId: "heading" })}
          className="text-[14px] uppercase tracking-[.64px] mb-[24px]"
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
        className="testimonial-cards-container w-[90%] mx-auto max-w-[1152px] flex gap-[22px] mb-[48px] flex-wrap md:flex-nowrap"
      >
        {customersDataHub?.selectTestimonialsCollection?.items.map(
          (testimonialCardData, i) => {
            if (!testimonialCardData) {
              return null;
            }

            return (
              <div
                className="group testimonial-card w-full p-[24px] border border-solid rounded-[8px] md:w-[50%] md:p-[48px]"
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
                <div className="testimonial-card-bottom flex justify-between flex-wrap md:flex-nowrap">
                  <div className="testimonial-user flex flex-col text-[14px]">
                    <p className="font-[500]">
                      {testimonialCardData.customerName}
                    </p>
                    <p className="font-[500] text-[#545454] mb-[24px] md:mb-0">
                      {testimonialCardData.titleposition}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="py-[12px] px-[24px] bg-white text-cg-text-blue border border-solid border-cg-btn-border-light-blue rounded-[4px] group-hover:text-white group-hover:bg-cg-hover-btn-bg-blue transition-all duration-[.4s] w-full text-center md:w-fit"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div
        {...inspectorPropsCust({ fieldId: "selectCustomerLogos" })}
        className="customer-logos-container max-w-[1152px] flex gap-[32px] mb-[24px] overflow-x-scroll ml-[5%] mx:mx-auto no-scrollbar mx:w-[90%]"
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
          }
        )}
      </div>
      <Link
        {...inspectorPropsGCC({ fieldId: "ctas" })}
        href={ctaLink}
        className="w-[90%] mx-auto max-w-[1152px] text-cg-text-blue my-[24px] block"
      >
        {ctaText}
      </Link>
      <div className="divider-line-container w-[90%] mx-auto max-w-[1152px]">
        <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
      </div>
    </section>
  );
}
