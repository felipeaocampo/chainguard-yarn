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
    <section className="max-w-[1152px] mx-auto">
      <div className="section-2-header-text mb-[48px]">
        <h3
          {...inspectorPropsGCC({ fieldId: "heading" })}
          className="text-[14px] uppercase tracking-[.64px] mb-[24px]"
        >
          {generalContentCard.heading}
        </h3>
        <p
          {...inspectorPropsGCC({ fieldId: "subheading" })}
          className="text-[36px] font-semibold leading-[43.2px]"
        >
          {generalContentCard.subheading}
        </p>
      </div>
      <div
        {...inspectorPropsCust({ fieldId: "selectTestimonials" })}
        className="testimonial-cards-container flex gap-[22px] w-full mb-[48px]"
      >
        {customersDataHub?.selectTestimonialsCollection?.items.map(
          (testimonialCardData, i) => {
            if (!testimonialCardData) {
              return null;
            }

            return (
              <div
                className="group testimonial-card w-[50%] p-[48px] border border-solid rounded-[8px]"
                key={testimonialCardData.sys.id}
              >
                <div className="testimonial-img-container mb-[24px]">
                  <Image
                    src={testimonialCardData?.logo?.url || ""}
                    alt={testimonialCardData?.logo?.description || ""}
                    width={testimonialCardData.logo?.width || 0}
                    height={testimonialCardData.logo?.height || 0}
                  />
                </div>
                <p className="mb-[24px] line-clamp-3">
                  {testimonialCardData.testimonial}
                </p>
                {/* <p className="mb-[24px] h-[72px] overflow-y-clip relative after:content-['...'] after:bottom-0 after:right-0 after:translate-x-[-10px] after:absolute">
            {testimonialCardData.testimonial}
          </p> */}
                <div className="testimonial-card-bottom flex justify-between">
                  <div className="testimonial-user flex flex-col">
                    <p>{testimonialCardData.customerName}</p>
                    <p>{testimonialCardData.titleposition}</p>
                  </div>
                  <Link
                    href="#"
                    className="py-[12px] px-[24px] bg-white text-cg-text-blue border border-solid border-cg-btn-border-light-blue rounded-[4px] group-hover:text-white group-hover:bg-cg-hover-btn-bg-blue transition-all duration-[.4s]"
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
        className="customer-logos-container flex gap-[32px] mb-[24px]"
      >
        {customersDataHub?.selectCustomerLogosCollection?.items.map(
          (customerLogo, i) => (
            <Image
              key={customerLogo?.sys?.id || i}
              src={customerLogo?.url || ""}
              alt={customerLogo?.description || ""}
              width={customerLogo?.width || 0}
              height={customerLogo?.height || 0}
            />
          )
        )}
      </div>
      <Link
        {...inspectorPropsGCC({ fieldId: "ctas" })}
        href={ctaLink}
        className="text-cg-text-blue my-[24px] block"
      >
        {ctaText}
      </Link>
      <div className="divider-line pt-[96px] mb-[96px] w-[85px] border-b border-solid"></div>
    </section>
  );
}
