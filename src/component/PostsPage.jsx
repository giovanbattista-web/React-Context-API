import React from 'react';
import PostsList from './PostsList';

const PostsPage = ({ posts }) => {
    return (
        <div>
            <h1>Lista di tutti i nostri post</h1>
            <PostsList posts={posts} />
        </div>
    )
};

export default PostsPage;