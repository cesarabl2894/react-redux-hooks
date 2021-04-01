import React, { useEffect } from 'react';
import { fetchPosts } from '../store/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';


const PostItem = props => {
    return (
        <div>
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
        </div>
    )
}


function Posts() {
    const posts = useSelector(state => state.posts.items);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchPosts());
    });

    
    return (
        <div>
            <h1>Posts</h1>
            <div className="posts">
                {posts.map(post => (
                    <PostItem 
                        post={post}
                        key={post.id}

                    />
                ))}
            </div>
        </div>
    )
}

export default Posts;