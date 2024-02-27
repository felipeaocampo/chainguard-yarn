import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { ReactNode } from "react";
import { BlogLinksFieldsFragment } from "./__generated/sdk";
import Link from "next/link";
import Image from "next/image";

export const blogRenderOptions = (links: any): Options => {
  //create data stores for entries, assets, and resources
  const entryMap = new Map();
  const assetMap = new Map();
  const resourceMap = new Map();

  //MAP OUT EACH POSSIBLE ENTRY
  for (const entry of links.entries.inline) {
    // console.log("OPTIONS: ENTRY/INLINES (emb inline entries): ", entry);
    entryMap.set(entry?.sys.id, entry);
  }
  for (const entry of links.entries.hyperlink) {
    // console.log("OPTIONS: ENTRY/HYPERLINK (link to existing entry): ", entry);
    entryMap.set(entry?.sys.id, entry);
  }
  for (const entry of links.entries.block) {
    // console.log("OPTIONS: ENTRY/BLOCK (emb block entries):", entry);
    entryMap.set(entry?.sys.id, entry);
  }

  //MAP OUT EACH POSSIBLE ASSET
  for (const asset of links.assets.hyperlink) {
    // console.log(asset);
    assetMap.set(asset?.sys.id, asset);
  }
  for (const asset of links.assets.block) {
    // console.log("OPTIONS: ASSET/BLOCK (commonly img assets): ", asset);
    assetMap.set(asset?.sys.id, asset);
  }

  //MAP OUT EACH POSSIBLE RESOURCE
  // Todo: Learn what exactly is an asset and how/where it can be used

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <strong style={{ fontWeight: 600 }}>{text}</strong>
      ),
      [MARKS.CODE]: (text) => (
        <code
          style={{
            fontSize: "12px",
            color: "#e3e3e6",
            backgroundColor: "#25252a",
            padding: "4px 8px",
          }}
        >
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p key={Math.random()} className="mb-[24px]">
          {children}
        </p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2
          key={Math.random()}
          className="mb-[8px]"
          style={{
            letterSpacing: "-.02em",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "28px",
          }}
        >
          {children}
        </h2>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="text-[24px] font-[600] leading-[31.2px] tracking-[-.02em] my-[24px]">
          {children}
        </blockquote>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a
            key={Math.random()}
            className="text-cg-text-blue hover:text-cg-hover-btn-bg-blue transition-all duration-[.2s]"
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      },
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        const entry = entryMap.get(node.data.target.sys.id);

        switch (entry.__typename) {
          case "Blog":
            return (
              <Link
                key={Math.random()}
                className="text-cg-text-blue hover:text-cg-hover-btn-bg-blue transition-all duration-[.2s]"
                target="_blank"
                href={`/unchained/${entry.blogSlug}`}
              >
                {children}
              </Link>
            );

          case "GeneralPage":
            //handle link to general page
            return (
              <Link
                key={Math.random()}
                className="text-cg-text-blue hover:text-cg-hover-btn-bg-blue transition-all duration-[.2s]"
                href={entry.pageSlug}
              >
                {children}
              </Link>
            );
          default:
            return "";
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const asset = assetMap.get(node.data.target.sys.id);

        return (
          <div
            className="flex justify-center"
            style={{ margin: "48px 0 74px 0" }}
          >
            <Image
              src={asset.url}
              alt={asset.description}
              width={asset.width}
              height={asset.height}
            />
          </div>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // console.log("BLOCKS.EMBEDDED_ENTRY NODE: ", node);
        // console.log("BLOCKS.EMBEDDED_ENTRY CHILDREN: ", children);
        const entry = entryMap.get(node.data.target.sys.id);
        // console.log("output: ", entry.code.replace('```\n', '').replace('```', ''));

        switch (entry.__typename) {
          case "CodeBlock":
            return (
              <pre>
                <code
                  className="text-[14px]"
                  style={{
                    borderRadius: "5px",
                    marginBottom: "32px",
                    padding: "18px",
                  }}
                >
                  {entry.code.replace("```\n", "").replace("```", "")}
                </code>
              </pre>
            );
          default:
            return "";
        }
      },
    },
    //   renderText: (text: string) => text.toUpperCase(),
  };

  return options;
};
