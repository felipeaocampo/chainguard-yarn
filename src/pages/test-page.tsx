import { client, previewClient } from "@/lib/client";
import { GetStaticProps } from "next";
import {
  GetHomePageDataQuery,
  GetTestPageDataQuery,
  PageSection,
  TestPageHeroSectionFragment,
} from "@/lib/__generated/sdk";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { NextSeo } from "next-seo";
import ExitPreviewCard from "@/components/ui/ExitPreviewCard";
import HeroContainer from "@/components/common/HeroContainer";
import Image from "next/image";
import { ComponentProps } from "react";

export default function TestPage({
  data,
  preview,
}: {
  data: GetTestPageDataQuery;
  preview: boolean;
}) {
  const liveData = useContentfulLiveUpdates(data);
  const section = liveData?.generalPage?.pageSectionCollection?.items[0]
    ?.pageSectionPartsCollection?.items[0] as TestPageHeroSectionFragment;

  const inspectorModeProps = useContentfulInspectorMode({
    entryId: section.sys.id || "",
  });

  if (!section) {
    return null;
  }

  return (
    <>
      <NextSeo
        title={liveData.generalPage?.pageMetadata?.pageTitle || ""}
        description={liveData.generalPage?.pageMetadata?.metaDescription || ""}
        canonical="http://localhost:3000/"
      />
      <main>
        {preview && (
          <ExitPreviewCard slug={liveData.generalPage?.pageSlug || "/"} />
        )}
        <HeroContainer>
          <section className="flex flex-col items-center mb-[96px] pt-[180px] max-w-[1152px] mx-auto">
            <h1
              {...inspectorModeProps({ fieldId: "heading" })}
              className="text-[48px] font-semibold mb-[12px] w-[500px] leading-[53px] text-center tracking-[-.02em]"
            >
              {section.heading}
            </h1>
            <h2
              {...inspectorModeProps({ fieldId: "subheading" })}
              className="text-[18px] mb-[36px]"
            >
              {section.subheading}
            </h2>

            <Image
              {...inspectorModeProps({ fieldId: "media" })}
              className="rounded-[20px]"
              src={section.mediaCollection?.items[0]?.url || ""}
              alt={section.mediaCollection?.items[0]?.description || ""}
              width={section.mediaCollection?.items[0]?.width || 0}
              height={section.mediaCollection?.items[0]?.height || 0}
            />
          </section>
        </HeroContainer>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  try {
    const contentful = preview ? previewClient : client;
    console.log("preview is: ", preview);

    const data = await contentful.getTestPageData({ preview });

    if (!data || !data.generalPage) {
      return {
        notFound: true,
      };
    }

    // console.log("SERVER GET TEST DATA: ", data);

    return {
      props: {
        data,
        preview,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
