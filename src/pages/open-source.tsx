import { client, previewClient } from "@/lib/client";
import { GetStaticProps } from "next";

export default function OpenSourcePage() {

    //ADD PREVIEW CLOSER TO HOMEPAGE AND THIS ONE!

  return (
    <div>
      <h1>Open Source Page</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    try {
      const contentful = preview ? previewClient : client;
      
      
      
      //TEST IF LIVE WILL WORK WITH A COLLECTION!
  
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
  