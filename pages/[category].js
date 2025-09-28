import { useRouter } from 'next/router';
import posts from '../data/posts.json';
import Link from 'next/link';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const filteredPosts = posts.filter(post => post.category === category);

  return (
    <div className="bg-benniBlack min-h-screen text-white p-5">
      <h1 className="text-2xl font-bold mb-4">Kategorie: {category}</h1>
      {filteredPosts.map(post => (
        <div key={post.id} className="mb-6 border-b border-gray-700 pb-4">
          <Link href={`/post/${post.id}`}>
            <h2 className="text-xl font-semibold hover:text-benniYellow">{post.title}</h2>
          </Link>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
