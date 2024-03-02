import { useRouter } from "next/router";

export default function SolutionsPage() {
  const { slug } = useRouter().query;

  return (
    <div>
      <h1>{`Welcome to the Solutions/${slug} Page!`}</h1>
    </div>
  );
}
