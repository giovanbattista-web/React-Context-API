import React from 'react';
import PostsList from '../components/PostsList';

const PostsPage = () => {
    return (
        <div className='container'>
            <div className='row gy-3'>
                <div className='col-12'>
                    <h1>I miei post</h1>
                </div>
            </div>
            <div className='col-12'>
                <PostsList />
            </div>
        </div>
    )
};

export default PostsPage;