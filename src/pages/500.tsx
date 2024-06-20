import { client, previewClient } from "@/lib/client";
import { GetStaticProps } from "next";

export default function ServerError() {
  return <h1>500 - Server-side error occurred</h1>;
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  try {
    const contentful = preview ? previewClient : client;
    console.log("preview is: ", preview);

    const data = await contentful.getMainNavData({ preview });

    if (!data || !data.navBar) {
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
