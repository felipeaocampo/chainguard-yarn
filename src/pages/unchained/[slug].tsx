import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";

import { GetBlogPageDataQuery } from "@/lib/__generated/sdk";
import { NextSeo } from "next-seo";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticPaths, GetStaticProps } from "next";
import { client, previewClient } from "@/lib/client";
import { useEffect } from "react";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import BlogSection1 from "@/components/blog/BlogSection1";
import { blogRenderOptions } from "@/lib/BlogRichTextOptions";
import { useRouter } from "next/router";

//HIGHLIGHT JS INSTURCTIONS
// Then register the languages you need
// hljs.registerLanguage("javascript", javascript);
// hljs.registerLanguage("javascript", javascript);

// SUPER HELPFUL CODE TO FOLLOW: https://maxschmitt.me/posts/nextjs-contentful-typescript

export default function BlogPost({
  blogData,
}: {
  blogData: GetBlogPageDataQuery;
}) {
  const { slug } = useRouter().query;
  const liveBlogData = useContentfulLiveUpdates(blogData);
  const blogInspectorProps = useContentfulInspectorMode({
    entryId: liveBlogData?.blogCollection?.items[0]?.sys.id || "",
  });

  const blog = liveBlogData?.blogCollection?.items[0];

  useEffect(() => {
    // hljs.initHighlighting();
    hljs.highlightAll();
  });

  //   TODO: WHEN ON A BLOG PAGE WE NEED TO TOGGLE THE NAV TO DISPLAY BACK TO NAV! WILL NEED TO ACCESS URL THRU ROUTER
  //   TODO: FIX THE Element previously highlighted. To highlight again, first unset `dataset.highlighted`. ERROR; highlightjs

  if (!blog) {
    return null;
  }

  return (
    <main className="border-b border-solid border-[#dcdcdc] pt-[180px]">
      <BlogSection1
        title={blog?.blogName || ""}
        authors={blog?.authors || []}
        tags={blog?.tags || []}
        datePublished={blog?.datePublished || ""}
        iProps={blogInspectorProps}
      />
      <div className="mx-auto max-w-[1152px] flex justify-between items-start">
        {blog.blogContent && blog.blogContent.json && blog.blogContent.links ? (
          <section className="max-w-[760px]">
            {documentToReactComponents(
              blog.blogContent.json,
              blogRenderOptions(blog.blogContent.links)
            )}
          </section>
        ) : null}
        <aside className="bg-red-300 sticky top-[40px]">
          Related blogs side panel
        </aside>
      </div>
      <section className="mx-auto max-w-[1152px] mb-[96px]">
        CTA section
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  try {
    const slug = params?.slug as string;
    const contentful = preview ? previewClient : client;

    const blogData = await contentful.getBlogPageData({ preview, slug });

    //WILL HAVE TO MAKE 2ND REQUEST FOR THE 3 RELATED ARTICLES USING THE CATEGORY OF THE ABOVE FETCHED ONE!
    // const relatedArticles = await contentful.getRelatedBlogArticles({preview, category}) // make sure the current article is NOT INCLUDED
    //start if off by testing off w/ just ANY 3 articles, so long as it's not the current. Get that working, then filter by category

    return {
      props: {
        blogData,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const contentful = client;

    const blogs = await contentful.getAllBlogPaths();

    const paths =
      blogs?.blogCollection?.items.map((blog) =>
        blog && blog.blogSlug
          ? { params: { slug: blog.blogSlug } }
          : { params: { slug: "" } }
      ) || [];

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
};
