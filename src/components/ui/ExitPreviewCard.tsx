import Link from "next/link";

export default function ExitPreviewCard({ slug }: { slug: string }) {


  return (
    <div className="bg-white py-[8px] px-[12px] fixed bottom-[20px] right-[20px] rounded-[20px] bg-opacity-50 border border-solid border-cg-btn-border-light-blue">
      To exit preview mode{" "}
      <Link className="underline" href={`/api/exit-preview-mode?slug=${slug}`}>Click me!</Link>
    </div>
  );
}
