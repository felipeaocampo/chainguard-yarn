import {
  UnchainedFeaturedBlogsFragment,
  Blogs,
  GeneralContentCard,
  PageSection,
  Blog,
} from "@/lib/__generated/sdk";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import Image from "next/image";
import Link from "next/link";

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function UnchainedSection1({
  unchainedSection1Data,
}: {
  unchainedSection1Data: PageSection | null;
}) {
  const generalContentCard = unchainedSection1Data?.pageSectionPartsCollection
    ?.items[1] as GeneralContentCard | undefined;

  const blogsDataHub = unchainedSection1Data?.pageSectionPartsCollection
    ?.items[0] as Blogs | undefined;

  const inspectorPropsGCC = useContentfulInspectorMode({
    entryId: generalContentCard?.sys.id || "",
  });
  const inspectorPropsFtBlgs = useContentfulInspectorMode({
    entryId: blogsDataHub?.sys.id || "",
  });

  if (!unchainedSection1Data || !generalContentCard || !blogsDataHub) {
    return null;
  }

  const [[ctaLink, ctaText]] = Object.entries(generalContentCard.ctas) as any[];

  const featuredBlogs = (blogsDataHub.featuredBlogsCollection?.items ||
    []) as Blog[];

  return (
    <section className=" mb-[96px] pt-[180px]">
      <div className="main-text max-w-[1152px] mx-auto flex justify-between w-full items-end mb-[48px]">
        <div className="text-left">
          <h5 {...inspectorPropsGCC({ fieldId: "heading" })}>
            {generalContentCard.heading}
          </h5>
          <h1 {...inspectorPropsGCC({ fieldId: "subheading" })}>
            {generalContentCard.subheading}
          </h1>
          <p {...inspectorPropsGCC({ fieldId: "descriptionText" })}>
            {generalContentCard.descriptionText}
          </p>
        </div>
        <button>{ctaText}</button>
      </div>
      <ul
        {...inspectorPropsFtBlgs({ fieldId: "featuredBlogs" })}
        className="featured-cards flex gap-5 justify-center"
      >
        {featuredBlogs.map((blog, i) => {
          return (
            <li key={blog.sys.id || i} className="max max-w-[564px]">
              <Link href={`/unchained/${blog.blogSlug}`}>
                <div className="blog-card-img h-[376px]">
                  <Image
                    src={blog.mainImage?.url || ""}
                    alt={blog.mainImage?.description || ""}
                    height={376}
                    width={blog.mainImage?.width || 0}
                  />
                </div>
                <div className="card-text">
                  <div className="category-container">
                    {blog.tags &&
                      blog.tags.map((tag: any, i: number) => (
                        <span key={i}>{tag}</span>
                      ))}
                  </div>
                  <h3>{blog.blogName}</h3>
                  <p className="line-clamp-2">{blog.metaAbout}</p>
                  <div className="card-data">
                    {blog.authors &&
                      blog.authors.map((author: any) => (
                        <span key={`${blog.blogName}/${author}`}>{author}</span>
                      ))}
                    <span>{formatDate(blog.datePublished)}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
