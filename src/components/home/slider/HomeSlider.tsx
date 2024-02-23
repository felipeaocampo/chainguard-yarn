import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import { HomeGCCSec4TypeB } from "@/components/home/HomeSection4";
import "swiper/css";
import "swiper/css/navigation";
// import "./HomeSlider.css";

export default function HomeSlider({
  slideCardsWithInspectorProps,
}: {
  slideCardsWithInspectorProps: [
    HomeGCCSec4TypeB,
    ReturnType<typeof useContentfulInspectorMode<{ entryId: string }>>
  ][];
}) {
  return (
    <Swiper
      navigation
      modules={[Navigation]}
      className="h-full w-full rounded-lg"
      slidesPerView={2.15}
      spaceBetween={24}
    >
      {slideCardsWithInspectorProps.map(([slide, iProps]) => {
        return (
          <SwiperSlide key={slide.sys.id}>
            <div className="slide-img-container bg-hero-cg-gradient rounded-[8px] mb-[24px]">
              <Image
                {...iProps({ fieldId: "media" })}
                src={slide.mediaCollection.items[0].url || ""}
                alt={slide.mediaCollection.items[0].description || ""}
                width={0}
                height={0}
                sizes="100vw"
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
