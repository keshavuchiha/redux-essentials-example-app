import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { postAdded } from "./features/post/postsSlice";

function AddPost() {
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const dispatch=useDispatch();
    const submitForm=()=>{
        if(title && content){
            dispatch(postAdded({
                id:nanoid(),
                title,
                content
            }))
        }
        setTitle('');
        setContent('');
    }
  return (
    <div>
        Add a Post
        <form>
            <label>PostTitle:</label>
            <input type="text" id="postTitle" name="postTitle" value={title} onChange={e=>setTitle( e.target.value)}></input>
            <label htmlFor="postTitle">PostContent:</label>
            <input type="text" id="postContent" name="postContent" value={content} onChange={e=>setContent(e.target.value)}></input>
            <button type="button" onClick={submitForm}>Submit post</button>
        </form>
    </div>
  )
}

export default AddPost