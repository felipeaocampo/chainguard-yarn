import HeroContainer from "@/components/common/HeroContainer";
import HomeSection1, {
  HomeSection1Props,
} from "@/components/home/HomeSection1";
import { GetHomePageDataQuery } from "@/lib/__generated/sdk";
import { client, previewClient } from "@/lib/client";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";

export default function Home({ data }: { data: GetHomePageDataQuery }) {
  const liveData = useContentfulLiveUpdates(data);
  // console.log("LIVE DATA: ", liveData);

  const homeSection1Data = liveData.generalPage?.pageSectionCollection
    ?.items[0] as HomeSection1Props;

  console.log("HomeSection1Props: ", homeSection1Data);

  return (
    <main>
      <HeroContainer>
        <HomeSection1 homeSection1Data={homeSection1Data} />
      </HeroContainer>
    </main>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  try {
    const contentful = preview ? previewClient : client;

    const data = await contentful.getHomePageData({ preview });

    if (!data) {
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
