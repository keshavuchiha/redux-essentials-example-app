import React from 'react'
import { useSelector } from 'react-redux';

function SinglePost({match}) {
    const {postId}=match.params;
    console.log(postId);
    const post=useSelector(state=>state.posts.find(post=>post.id==postId))
    console.log(post);
    if(!post){
      return (<div>
        Post not found
      </div>)
    }
    return (
    <div>
      {post.title}
      {post.content}
    </div>
  )
}

export default SinglePost