import { GetUnchainedPageDataQuery, PageSection } from "@/lib/__generated/sdk";
import { client, previewClient } from "@/lib/client";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import UnchainedSection1 from "@/components/unchained/UnchainedSection1";
import ExitPreviewCard from "@/components/ui/ExitPreviewCard";

export default function UnchainedPage({
  data,
  preview,
}: {
  data: GetUnchainedPageDataQuery;
  preview: boolean;
}) {
  const liveData = useContentfulLiveUpdates(data);

  const [unchainedSection1Data, unchainedSection2Data] = (liveData?.generalPage
    ?.pageSectionCollection?.items || []) as (PageSection | undefined)[];

  return (
    <>
      <NextSeo
        title={liveData.generalPage?.pageMetadata?.pageTitle || ""}
        description={liveData.generalPage?.pageMetadata?.metaDescription || ""}
        canonical="http://localhost:3000/unchained"
      />
      <main className="border-b border-solid border-[#dcdcdc]">
        {preview && (
          <ExitPreviewCard slug={`/${liveData.generalPage?.pageSlug}` || "/"} />
        )}
        <UnchainedSection1
          unchainedSection1Data={
            unchainedSection1Data ? unchainedSection1Data : null
          }
        />

        {/* <HomeSection2
          homeSection2Data={homeSection2Data ? homeSection2Data : null}
        />
        */}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  try {
    const contentful = preview ? previewClient : client;

    const data = await contentful.getUnchainedPageData({ preview });

    if (!data || !data.generalPage) {
      return {
        notFound: true,
      };
    }

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
