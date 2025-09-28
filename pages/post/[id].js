import { useRouter } from "next/router";
import posts from "../../data/posts.json";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find(p => p.id.toString() === id);

  if (!post) return <p>Post not found</p>;

  return (
    <main className="p-8">
      <h1 className="text-2xl text-benniYellow">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
      {post.image && <img src={post.image} alt={post.title} className="mt-4 rounded-lg" />}
    </main>
  );
}
