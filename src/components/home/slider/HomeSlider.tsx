import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import "swiper/css";
import "swiper/css/navigation";
import { HomeGeneralContentCardFragment } from "@/lib/__generated/sdk";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function HomeSlider({
  slideCardsWithInspectorProps,
}: {
  slideCardsWithInspectorProps: [
    HomeGeneralContentCardFragment,
    ReturnType<typeof useContentfulInspectorMode<{ entryId: string }>>
  ][];
}) {
  const { width } = useWindowDimensions();

  let numVisibleSlides = 1.15;

  if (width) {
    if (width >= 768) {
      numVisibleSlides = 2.15;
    } else if (width >= 640) {
      numVisibleSlides = 1.75;
    } else if (width >= 530) {
      numVisibleSlides = 1.45;
    }
  }

  return (
    <Swiper
      navigation
      modules={[Navigation]}
      className="rounded-lg w-[90%] mx-auto max-w-[1152px] !overflow-visible"
      // slidesPerView={2.15}
      slidesPerView={numVisibleSlides}
      spaceBetween={24}
    >
      {slideCardsWithInspectorProps.map(([slide, iProps], i) => {
        return (
          <SwiperSlide key={slide.sys.id || i} className="">
            <div className="slide-img-container bg-hero-cg-gradient rounded-[8px] mb-[24px] min-h-[280px] max-w-[380px] flex items-center lg:w-full lg:max-w-full">
              <Image
                {...iProps({ fieldId: "media" })}
                src={
                  (slide.mediaCollection?.items[0] &&
                    slide.mediaCollection?.items[0].url) ||
                  ""
                }
                alt={
                  (slide.mediaCollection?.items[0] &&
                    slide.mediaCollection?.items[0].description) ||
                  ""
                }
                width={
                  (slide.mediaCollection?.items[0] &&
                    slide.mediaCollection?.items[0].width) ||
                  0
                }
                height={0}
                // sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <h5
              {...iProps({ fieldId: "heading" })}
              className="mb-[5px] font-medium leading-[20px]"
            >
              {slide.heading}
            </h5>
            <p
              {...iProps({ fieldId: "subheading" })}
              className="text-[14px] text-cg-text-color-gray"
            >
              {slide.subheading}
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
