import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post';

function PostList() {
    const posts=useSelector(state=>state.posts);
    // console.log(posts);
    for(let i of posts){
        console.log(i);
    }
  return (
    <div>
        {posts.map(post=>(
            <div key={post.id}>
            <Post id={post.id} title={post.title} content={post.content}/>
            </div>
        ))}
    </div>
  )
}

export default PostList