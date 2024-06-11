import Link from "next/link";

export default function ExitPreviewCard({ slug }: { slug: string }) {
  return (
    <div className="fixed bottom-[20px] right-[20px] z-[2] rounded-[20px] border border-solid border-cg-btn-border-light-blue bg-white bg-opacity-50 px-[12px] py-[8px] backdrop-blur-sm">
      To exit preview mode{" "}
      <Link className="underline" href={`/api/exit-preview-mode?slug=${slug}`}>
        Click me!
      </Link>
    </div>
  );
}
