import PostCard from './components/PostCard';
import posts from '../';

export default function PostPage() {
  return (
    <div className="post-list grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          author={post.author}
          date={post.date}
          image={post.image}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
}
