import { useRouter } from 'next/router';
import posts from '../../data/posts.json';

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find(p => p.id === id);

  if (!post) return <p className="p-5 text-white">Beitrag nicht gefunden</p>;

  return (
    <div className="bg-benniBlack min-h-screen text-white p-5">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div>{post.content}</div>
      {post.images && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {post.images.map((img, idx) => (
            <img key={idx} src={img} alt={`Bild ${idx}`} className="rounded" />
          ))}
        </div>
      )}
      {post.poll && (
        <div className="mt-6">
          <h3 className="font-bold">{post.poll.question}</h3>
          {post.poll.options.map(option => (
            <div key={option} className="flex items-center mt-2">
              <input type="radio" name="poll" className="mr-2" />
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
