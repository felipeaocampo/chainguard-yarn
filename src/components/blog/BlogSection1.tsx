import { useContentfulInspectorMode } from "@contentful/live-preview/dist/react";
import { formatDate } from "../unchained/UnchainedSection1";

export default function BlogSection1({
  title,
  authors,
  tags,
  datePublished,
  iProps,
}: {
  title: string;
  tags: (string | null)[];
  authors: (string | null)[];
  datePublished: string;
  iProps: ReturnType<typeof useContentfulInspectorMode<{ entryId: string }>>;
}) {
  return (
    <section className="max-w-[1152px] mx-auto mb-[24px]">
      <div {...iProps({ fieldId: "tags" })} className="mb-[12px] space-x-2">
        {tags.map((tag, i) => (
          <span
            className="text-[14px] text-cg-text-blue font-[500] leading-[1.5] px-[8px] py-[2px] bg-[#f5f6fe] rounded-[4px]"
            key={`${tag}/${i}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <h1
        {...iProps({ fieldId: "blogName" })}
        className="text-[36px] font-[600] leading-[43.2px] tracking-[-.02em] max-w-[760px] mb-[24px]"
      >
        {title}
      </h1>
      <div {...iProps({ fieldId: "authors" })}>
        {authors.map((author, i) => (
          <span
            className="text-[14px] font-[500] leading-[150%] mb-[8px]"
            key={`${author}/${i}`}
          >
            {author}
          </span>
        ))}
      </div>
      <div {...iProps({ fieldId: "datePublished" })}>
        <time>{formatDate(datePublished)}</time>
      </div>
    </section>
  );
}
