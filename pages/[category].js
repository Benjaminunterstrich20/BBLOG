import { useRouter } from "next/router";
import posts from "../data/posts.json";
import Link from "next/link";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const categoryPosts = posts.filter(p => p.category === category);

  return (
    <main className="p-8">
      <h1 className="text-2xl text-benniYellow">Kategorie: {category}</h1>
      <ul className="mt-4 space-y-2">
        {categoryPosts.map(p => (
          <li key={p.id}>
            <Link href={`/post/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
