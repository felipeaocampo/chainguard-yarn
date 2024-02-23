import HeroContainer from "@/components/common/HeroContainer";
import HomeSection1, {
  HomeSection1Props,
} from "@/components/home/HomeSection1";
import HomeSection2, {
  HomeSection2Props,
} from "@/components/home/HomeSection2";
import HomeSection3, {
  HomeSection3Props,
} from "@/components/home/HomeSection3";
import HomeSection4, {
  HomeSection4Props,
} from "@/components/home/HomeSection4";
import { GetHomePageDataQuery } from "@/lib/__generated/sdk";
import { client, previewClient } from "@/lib/client";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";

export default function Home({ data }: { data: GetHomePageDataQuery }) {
  const liveData = useContentfulLiveUpdates(data);
  // console.log("LIVE DATA: ", liveData);

  const homeSection1Data = liveData.generalPage?.pageSectionCollection
    ?.items[0] as HomeSection1Props;
  const homeSection2Data = liveData.generalPage?.pageSectionCollection
    ?.items[1] as HomeSection2Props;
  const homeSection3Data = liveData.generalPage?.pageSectionCollection
    ?.items[2] as HomeSection3Props;
  const homeSection4Data = liveData.generalPage?.pageSectionCollection
    ?.items[3] as HomeSection4Props;

  // console.log("HomeSection4: ", homeSection4Data);

  // ! TODO: SET UP GUARD VALUES FOR EACH OUTPUT FIELD SO THAT IF SOMEONE MESSES UP IN CONTENTFUL AND THERE'S AN EMPTY VALUE AND PUBLISHES, THE SITE DOESNT BREAK AT LEAST
  // TODO: make it so that the slider slides extend beyond the 1152px screen max width

  return (
    <main>
      <HeroContainer>
        <HomeSection1 homeSection1Data={homeSection1Data} />
      </HeroContainer>
      <HomeSection2 homeSection2Data={homeSection2Data} />
      <HomeSection3 homeSection3Data={homeSection3Data} />
      <HomeSection4 homeSection4Data={homeSection4Data} />
    </main>
  );
}

export const getStaticProps = async ({ preview = false }) => {
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
