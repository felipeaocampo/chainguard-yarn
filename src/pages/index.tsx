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
import ExitPreviewCard from "@/components/ui/ExitPreviewCard";
import VideoPlayer from "@/components/ui/video/VideoPlayer";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function HomePage({
  data,
  preview,
}: {
  data: GetHomePageDataQuery;
  preview: boolean;
}) {
  const liveData = useContentfulLiveUpdates(data); 
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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

  const videoJsOptions = {
    poster: "https://i.ytimg.com/vi/Eq2zRLgHCJo/maxresdefault.jpg",
    sources: [
      {
        src: "https://get.chainguard.dev/hubfs/chg_chainguard-demo_v7%20(Original).mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <>
      <NextSeo
        title={liveData.generalPage?.pageMetadata?.pageTitle || ""}
        description={liveData.generalPage?.pageMetadata?.metaDescription || ""}
        canonical="http://localhost:3000/"
      />
      <main className="border-b border-solid border-[#dcdcdc]">
        {preview && (
          <ExitPreviewCard slug={liveData.generalPage?.pageSlug || "/"} />
        )}
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
        <section className="mx-auto mb-[48px] w-[90%] max-w-[1152px]">
          <div className="overflow-hidden rounded-[20px] border border-solid border-[#e5e8ff]">
            <VideoPlayer options={videoJsOptions} />
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  try {
    const contentful = preview ? previewClient : client;
    console.log("preview is: ", preview);

    const data = await contentful.getHomePageData({ preview });

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
