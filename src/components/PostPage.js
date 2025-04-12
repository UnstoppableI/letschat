import PostCard from './PostCard';
import posts from '../data/Posts.json'; // Assuming you have a posts.json file with your posts data
import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';


export default function PostPage() {
  const [input, setInput] = useState("");
  return (
    <div className="post-list m-2 p-2">
      <div>
      <Form className="d-flex">
          <Form.Control
            type="file"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" className="ms-2">Post</Button>
        </Form>
      </div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          author={post.author}
          timestamp={post.timestamp}
          image={post.image}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
}
