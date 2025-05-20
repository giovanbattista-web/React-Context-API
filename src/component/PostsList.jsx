import React from 'react';
import PostsPage from './PostsPage';
import { useContext } from 'react';
import CountContext from '../contexts/CountContext';

const PostsList = ({ posts }) => {
    let { count } = useContext(CountContext);

    return (
        <div className='container'>
            <div className='display-1'>{count}</div>
            <ul className='list-group'>
                {posts.map((post, index) => (
                    <li className='list-group-item' key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>{post.category}</p>
                    </li>
                )
                )
                }
            </ul>
        </div>
    )
};

export default PostsList;