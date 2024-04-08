import { useParams } from 'react-router-dom';
import {usePostContext} from "../../utils/context/postContext.jsx";

const PostDetail = () => {
  const { id } = useParams();
  const {state} = usePostContext()
  const post = state.posts.find(post => post.id.toString() === id);

  return <div>
    <h2>Détails du post</h2>
  {post ? (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ) : (
    <p>Pas de contenu</p>
  )}
  </div>;
};

export default PostDetail