import PostCard from './PostCard';
import posts from '../data/Posts.json'; // Assuming you have a posts.json file with your posts data

export default function PostPage() {
  return (
    <div className="post-list m-2 p-2">
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
