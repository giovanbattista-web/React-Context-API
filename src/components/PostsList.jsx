import { useContext } from 'react';
import PostsContext from '../contexts/PostsContext';
import PostCard from './PostCard';


const PostsList = () => {
    // UTILIZZO IL CONTESTO CHE HO CREATO E MESSO A DISPOSIZIONE 
    const posts = useContext(PostsContext);
    return (
        <div className='row gy-3'>
            {posts.map((post) => {
                return <PostCard key={post.id} post={post} /> //PROP AGGIUNTA 
            })}
        </div>
    )
};

export default PostsList;