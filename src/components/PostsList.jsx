import React from 'react';
import { useContext } from 'react';
import CountContext from '../contexts/CountsContext';
import PostCard from '../pages/PostCard';


const PostsList = () => {
    // UTILIZZO IL CONTESTO CHE HO CREATO E MESSO A DISPOSIZIONE 
    const posts = useContext(CountContext);
    console.log(posts);
    return (
        <>
            <div className='row gy-3'>
                {posts.map((post) => {
                    return <PostCard key={post.id} post={post} /> //PROP AGGIUNTA 
                })}
            </div>
        </>
    )
};

export default PostsList;