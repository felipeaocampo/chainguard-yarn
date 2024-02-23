import Image from "next/image";
import Link from "next/link";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import { ContentfulImgType } from "./HomeSection1";

export type CustomerTestimonialCardType = {
  __typename: string;
  sys: {
    id: string;
  };
  testimonial: string;
  customerName: string;
  titleposition: string;
  logo: ContentfulImgType;
};

export type HomeSection2Props = {
  __typename: string;
  sys: {
    id: string;
  };
  pageSectionPartsCollection: {
    __typename: string;
    items: (HomeSec2GCCType | HomeSec2CustsType)[];
  };
};

type HomeSec2GCCType = {
  __typename: string;
  sys: {
    id: string;
  };
  heading: string;
  subheading: string;
  ctas: {
    [key: string]: string;
  };
};

type HomeSec2CustsType = {
  __typename: string;
  sys: {
    id: string;
  };
  selectCustomerLogosCollection: {
    __typename: string;
    items: ContentfulImgType[];
  };
  selectTestimonialsCollection: {
    __typename: string;
    items: CustomerTestimonialCardType[];
  };
};

export default function HomeSection2({
  homeSection2Data,
}: {
  homeSection2Data: HomeSection2Props;
}) {
  const generalContentCard = homeSection2Data.pageSectionPartsCollection
    ?.items[0] as HomeSec2GCCType;
  const customersDataHub = homeSection2Data.pageSectionPartsCollection
    ?.items[1] as HomeSec2CustsType;

  const inspectorPropsGCC = useContentfulInspectorMode({
    entryId: generalContentCard.sys.id,
  });
  const inspectorPropsCust = useContentfulInspectorMode({
    entryId: customersDataHub.sys.id,
  });

  const [[ctaLink, ctaText]] = Object.entries(generalContentCard.ctas);

  // console.log("CUST: ", customersDataHub);

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
        {customersDataHub.selectTestimonialsCollection.items.map(
          (testimonialCardData, i) => {
            if (
              !testimonialCardData?.logo.url ||
              !testimonialCardData?.logo.description
            ) {
              return (
                <div className="testimonial-card w-[50%] p-[48px]" key={i}>
                  <div className="testimonial-img-container">
                    Image failed to load...
                  </div>
                </div>
              );
            }

            return (
              <div
                className="group testimonial-card w-[50%] p-[48px] border border-solid rounded-[8px]"
                key={testimonialCardData.sys.id}
              >
                <div className="testimonial-img-container mb-[24px]">
                  <Image
                    src={testimonialCardData?.logo.url}
                    alt={testimonialCardData?.logo.description}
                    width={testimonialCardData.logo.width}
                    height={testimonialCardData.logo.height}
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
        {customersDataHub.selectCustomerLogosCollection.items.map(
          (customerLogo) => (
            <Image
              key={customerLogo.sys.id}
              src={customerLogo.url}
              alt={customerLogo.description}
              width={customerLogo.width}
              height={customerLogo.height}
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

/*

*/
