// @ts-nocheck

import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

import {
  BlogFieldsFragment,
  GetRelatedBlogsQuery,
} from "@/lib/__generated/sdk";
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
import ExitPreviewCard from "@/components/ui/ExitPreviewCard";
import Image from "next/image";
import { Span } from "next/dist/trace";
import { formatDate } from "@/components/unchained/UnchainedSection1";
import { useExternalScript } from "@/hooks/useScriptLoad";
import Link from "next/link";

export default function BlogPost({
  blogData,
  preview,
  relatedArticles,
}: {
  blogData: BlogFieldsFragment;
  preview: boolean;
  relatedArticles: GetRelatedBlogsQuery;
}) {
  const { slug } = useRouter().query;
  const router = useRouter();

  const liveBlog = useContentfulLiveUpdates(blogData);
  const blogInspectorProps = useContentfulInspectorMode({
    entryId: liveBlog?.sys?.id || "",
  });
  //   const blog = liveBlogData.blogCollection?.items[0];

  const { isLoaded } = useExternalScript(
    "https://platform.twitter.com/widgets.js"
  );
  if (isLoaded) {
    window.twttr?.widgets.load();
  }

  useEffect(() => {
    hljs.highlightAll();
  });

  // const loadTwitterScript = useCallback(() => {
  //   return new Promise<void>((resolve) => {
  //     const existingScript = document.querySelector(
  //       'script[src="https://platform.twitter.com/widgets.js"]'
  //     );

  //     if (!existingScript) {
  //       const script = document.createElement("script");
  //       script.src = "https://platform.twitter.com/widgets.js";
  //       script.async = true;
  //       script.charset = "utf-8";
  //       script.onload = () => resolve();
  //       document.body.appendChild(script);
  //     } else {
  //       resolve();
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   const initializeTwitterWidgets = async () => {
  //     try {
  //       await loadTwitterScript();
  //       if (window.twttr && window.twttr.widgets) {
  //         window.twttr.widgets.load();
  //       }
  //     } catch (error) {
  //       console.error("Failed to load Twitter widgets:", error);
  //     }
  //   };

  //   initializeTwitterWidgets();

  //   // Re-initialize Twitter widgets whenever the route changes
  // }, [router.asPath, loadTwitterScript]);

  // console.log("asPath", router.asPath);

  //   TODO: WHEN ON A BLOG PAGE WE NEED TO TOGGLE THE NAV TO DISPLAY BACK TO NAV! WILL NEED TO ACCESS URL THRU ROUTER
  //   TODO: FIX THE Element previously highlighted. To highlight again, first unset `dataset.highlighted`. ERROR; highlightjs

  if (!liveBlog) {
    return null;
  }

  return (
    <main className="border-b border-solid border-[#dcdcdc] pt-[180px]">
      {preview && <ExitPreviewCard slug={`/unchained/${slug as string}`} />}
      <BlogSection1
        title={liveBlog?.blogName || ""}
        authors={liveBlog?.authors || []}
        tags={liveBlog?.tags || []}
        datePublished={liveBlog?.datePublished || ""}
        iProps={blogInspectorProps}
      />
      <div className="mx-auto max-w-[1152px] flex justify-between items-start shrink-0">
        {liveBlog.blogContent &&
        liveBlog.blogContent.json &&
        liveBlog.blogContent.links ? (
          <section
            {...blogInspectorProps({ fieldId: "blogContent" })}
            className="w-[693px]"
          >
            {documentToReactComponents(
              liveBlog.blogContent.json,
              blogRenderOptions(liveBlog.blogContent.links)
            )}
          </section>
        ) : null}
        <aside className=" sticky top-[40px] max-w-[353px]">
          <h4 className="mb-[24px] font-[600] text-[20px] leading-[120%] tracking-[-.02em]">
            Related Articles
          </h4>
          {relatedArticles?.blogCollection?.items &&
            relatedArticles.blogCollection?.items.map((relatedBlog, i) => {
              return (
                <Link
                  key={relatedBlog?.sys?.id || i}
                  href={relatedBlog?.blogSlug || "/"}
                  // target="_blank"
                >
                  <div className="space-y-[12px]">
                    <div className="related-img-container h-[114px] w-[172px] rounded-[8px] overflow-hidden">
                      <Image
                        src={relatedBlog?.mainImage?.url || ""}
                        alt={relatedBlog?.mainImage?.description || ""}
                        width={relatedBlog?.mainImage?.width || 0}
                        height={relatedBlog?.mainImage?.height || 0}
                        className="object-cover h-full"
                      />
                    </div>

                    <div className="tag-container">
                      {relatedBlog?.tags?.map((tag, i) => (
                        <span key={`${tag}/${i}`}>{tag}</span>
                      ))}
                    </div>
                    <h5>{relatedBlog?.blogName}</h5>
                    <div className="date-container !mb-[48px]">
                      <time>
                        {formatDate(relatedBlog?.datePublished || "")}
                      </time>
                    </div>
                  </div>
                </Link>
              );
            })}
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
    console.log("preview is: ", preview);

    const blogData = await contentful.getBlogPageData({ preview, slug });

    if (!blogData || !blogData?.blogCollection?.items[0]) {
      return { notFound: true };
    }

    //WILL HAVE TO MAKE 2ND REQUEST FOR THE 3 RELATED ARTICLES USING THE CATEGORY OF THE ABOVE FETCHED ONE!
    // const relatedArticles = await contentful.getRelatedBlogArticles({preview, category}) // make sure the current article is NOT INCLUDED
    //start if off by testing off w/ just ANY 3 articles, so long as it's not the current. Get that working, then filter by category
    const relatedArticles = await contentful.getRelatedBlogs({ preview, slug });
    // console.log("related: ", relatedArticles);

    return {
      props: {
        blogData: blogData.blogCollection?.items[0],
        relatedArticles,
        preview,
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
