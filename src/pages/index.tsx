import { GetHomePageDataQuery, PageSection } from "@/lib/__generated/sdk";
import { client, previewClient } from "@/lib/client";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import HeroContainer from "@/components/common/HeroContainer";
import HomeSection1 from "@/components/home/HomeSection1";
import HomeSection2 from "@/components/home/HomeSection2";
import HomeSection3 from "@/components/home/HomeSection3";
import HomeSection4 from "@/components/home/HomeSection4";
import HomeSection5 from "@/components/home/HomeSection5";
import HomeSection6 from "@/components/home/HomeSection6";

export default function HomePage({ data }: { data: GetHomePageDataQuery }) {
  const liveData = useContentfulLiveUpdates(data);

  const [
    homeSection1Data,
    homeSection2Data,
    homeSection3Data,
    homeSection4Data,
    homeSection5Data,
    homeSection6Data,
  ] = (liveData?.generalPage?.pageSectionCollection?.items || []) as (
    | PageSection
    | undefined
  )[];

  // TODO: make it so that the slider slides extend beyond the 1152px screen max width

  // console.log("homeSection6Data: ", homeSection6Data);

  return (
    <>
      <NextSeo
        title={liveData.generalPage?.pageMetadata?.pageTitle || ""}
        description={liveData.generalPage?.pageMetadata?.metaDescription || ""}
        canonical="http://localhost:3000/"
      />
      <main className="border-b border-solid border-[#dcdcdc]">
        <HeroContainer>
          <HomeSection1
            homeSection1Data={homeSection1Data ? homeSection1Data : null}
          />
        </HeroContainer>
        <HomeSection2
          homeSection2Data={homeSection2Data ? homeSection2Data : null}
        />
        <HomeSection3
          homeSection3Data={homeSection3Data ? homeSection3Data : null}
        />
        <HomeSection4
          homeSection4Data={homeSection4Data ? homeSection4Data : null}
        />
        <HomeSection5
          homeSection5Data={homeSection5Data ? homeSection5Data : null}
        />
        <HomeSection6
          homeSection6Data={homeSection6Data ? homeSection6Data : null}
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  try {
    const contentful = preview ? previewClient : client;

    const data = await contentful.getHomePageData({ preview });

    if (!data || !data.generalPage) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
