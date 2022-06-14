import React from 'react'
import { Link } from 'react-router-dom';

function Post({id,title,content}) {
  console.log(title);
  return (
    <div>
        id:{id}
        Title:{title},
        Content: {content}
        <Link to={`/posts/${id}`} className='button muted-button'>View Post</Link>
    </div>
  )
}

export default Post